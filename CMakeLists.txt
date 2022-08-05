cmake_minimum_required(VERSION 3.14)
project(interfaces)

# Automatically determine our project namespace.
find_package(Git)
execute_process(
        COMMAND ${GIT_EXECUTABLE} config --get remote.origin.url
        OUTPUT_VARIABLE REMOTE_ORIGIN
        OUTPUT_STRIP_TRAILING_WHITESPACE)

string(REPLACE "git@github.com:" "" REPO_PATH "${REMOTE_ORIGIN}")
string(REPLACE "https://github.com/" "" REPO_PATH "${REPO_PATH}")

string(REPLACE ".git" "" PROJECT_REF "${REPO_PATH}")
string(TOLOWER ${PROJECT_REF} PROJECT_REF)

include(src/cmake/FindgRPC.cmake)

find_package(PkgConfig REQUIRED)
find_package(Protobuf REQUIRED)
#find_package(gRPC CONFIG REQUIRED)
# find_package(Protobuf REQUIRED)
set(PROTO_PATH "${PROJECT_SOURCE_DIR}/src/proto")
set(GENERATED_PROTOBUF_PATH "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY ${GENERATED_PROTOBUF_PATH})

## Python target support
find_package(Python3 REQUIRED COMPONENTS Interpreter)
execute_process(COMMAND pip3 show grpcio-tools
        RESULT_VARIABLE EXIT_CODE
        OUTPUT_QUIET)
if (NOT ${EXIT_CODE} EQUAL 0)
    message(FATAL_ERROR
            "The \"grpcio-tools\" Python3 package is not installed. Please install it using the following command: \"pip3 install grpcio-tools\".")
endif()

set(python_plugin "")
set(python_output "--python_out")
set(python_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY "${python_output_dir}")
file(WRITE "${PROJECT_SOURCE_DIR}/gooseai/__init__.py")
file(WRITE "${PROJECT_SOURCE_DIR}/gooseai/__init__.py")
set(python_exts "_pb2.py")

set(python_grpc_exec "python3")
set(python_grpc_args "-m" "grpc_tools.protoc")
set(python_grpc_output "--python_out")
set(python_grpc_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
set(python_grpc_plugin "--grpc_python_out=${python_grpc_output_dir}")
set(python_grpc_exts "_grpc.py")

## Golang target support
execute_Process(COMMAND go version
        RESULT_VARIABLE EXIT_CODE)
if (NOT ${EXIT_CODE} EQUAL 0)
    message(FATAL_ERROR
            "You need to have a `golang` environment installed with an appropriately set GOROOT.")
endif()

execute_process(COMMAND go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26
        RESULT_VARIABLE EXIT_CODE)
if (NOT ${EXIT_CODE} EQUAL 0)
    message(FATAL_ERROR
            "Error ensuring that `protoc-gen-go` is installed.")
endif()
execute_process(COMMAND go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1.0
        RESULT_VARIABLE EXIT_CODE)
if (NOT ${EXIT_CODE} EQUAL 0)
    message(FATAL_ERROR
            "Error ensuring that `protoc-gen-go-grpc` is installed.")
endif()

set(golang_plugin "")
set(golang_output "--go_out")
set(golang_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY "${golang_output_dir}")
set(golang_exts ".go")

set(golang_grpc "")
set(golang_grpc_output "--go-grpc_out")
set(golang_grpc_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY "${golang_grpc_output_dir}")
set(golang_grpc_exts "-grpc.go")

#set(typescript_grpc "")
#set(typescript_grpc_args "--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts")
#set(typescript_grpc_output "--ts_out")
#set(typescript_grpc_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
#file(MAKE_DIRECTORY "${typescript_grpc_output_dir}")
#set(typescript_grpc_exts "_grpc_pb.d.ts")

#execute_process(COMMAND pnpm version
#        RESULT_VARIABLE EXIT_CODE
#        OUTPUT_QUIET)
#if (NOT ${EXIT_CODE} EQUAL 0)
#    message(FATAL_ERROR
#            "pnpm is not installed. Please ensure that it is installed by using your favorite package manager.")
#endif()

#execute_process(COMMAND pnpm install
#        RESULT_VARIABLE EXIT_CODE)
#if (NOT ${EXIT_CODE} EQUAL 0)
#    message(FATAL_ERROR
#            "pnpm install failed!")
#endif()

#add_custom_target (
#      pnpm-target
#      COMMAND cd ${PROJECT_SOURCE_DIR} && cd html && npm install && npm run build
#)

## Protobuf and GRPC stub building macros
macro (_add_pb_file _src TYP VAR)
    message("Will generate stub ${VAR} for ${_src}")
    list(APPEND SRC_${VAR} ${_src})
endmacro()

macro (add_protobufs)
    foreach (_src ${ARGN})
        _add_pb_file(${_src} PROTO Protobufs)
    endforeach()
endmacro()

macro(_generate_interface LANG INTERFACE_FILE)
    get_filename_component(_PROTOBUF_DIR "${INTERFACE_FILE}" DIRECTORY)
    get_filename_component(_PROTOBUF_SHORT "${INTERFACE_FILE}" NAME_WE)
    file(MAKE_DIRECTORY "${${_lang}_output_dir}")
    file(MAKE_DIRECTORY "${_PROTOBUF_DIR}")
    set(_PROTOBUF_NAME "${_PROTOBUF_DIR}/${_PROTOBUF_SHORT}")
    set(OUTPUT_FILES)
    set(CMD_EXEC)
    foreach(_ext ${${LANG}_exts})
        set(OUTPUT_FILE_NAME "${${LANG}_output_dir}/${_PROTOBUF_SHORT}/${_PROTOBUF_SHORT}${_ext}")
        list(APPEND GENERATED_PROTOBUF_FILES_${LANG} "${OUTPUT_FILE_NAME}")
        list(APPEND OUTPUT_FILES "${OUTPUT_FILE_NAME}")
        message("${INTERFACE_FILE} => ${OUTPUT_FILE_NAME}")
    endforeach()
    if(DEFINED ${LANG}_exec)
        set(CMD_EXEC ${${LANG}_exec})
    else()
        set(CMD_EXEC "${PROTOBUF_PROTOC_EXECUTABLE}")
    endif()
    set(CMD_PLUGIN)
    if(NOT "${${LANG}_plugin}" STREQUAL "")
        set(CMD_PLUGIN "${${LANG}_plugin}/${_PROTOBUF_SHORT}")
    endif()
    add_custom_command(
            OUTPUT ${OUTPUT_FILES}

            COMMAND "mkdir"
            ARGS "-p"
            ARGS "${${LANG}_output_dir}/${_PROTOBUF_SHORT}"

            COMMAND ${CMD_EXEC}
            ARGS ${${LANG}_args}
            ARGS "--proto_path=${PROTO_PATH}"
            ARGS "--experimental_allow_proto3_optional"
            ARGS "${CMD_PLUGIN}"
            ARGS "${${LANG}_output}=${${LANG}_output_dir}/${_PROTOBUF_SHORT}"
            ARGS "${INTERFACE_FILE}")
endmacro()

macro(generate_interfaces)
    foreach(_lang ${TARGET_LANGUAGES})
        foreach(_src ${SRC_Interfaces} ${SRC_Protobufs})
            _generate_interface("${_lang}" ${_src})
        endforeach()
        foreach(_src ${SRC_Interfaces})
            if(DEFINED ${_lang}_grpc_output)
                _generate_interface(${_lang}_grpc ${_src})
            endif()
        endforeach()
    endforeach()
endmacro()

macro(add_target_languages)
    foreach(_lang ${ARGN})
        message("Will generate stubs for ${_lang}")
        #file(MAKE_DIRECTORY "${GENERATED_PROTOBUF_PATH}/${_lang}")
        file(MAKE_DIRECTORY "${${_lang}_output_dir}")
        list(APPEND TARGET_LANGUAGES ${_lang})
    endforeach()
endmacro()

set(RESOURCES)
macro(add_resource)
    foreach(_res ${ARGN})
        list(APPEND RESOURCES "${CMAKE_CURRENT_BINARY_DIR}/${_res}")
        add_custom_command(
                OUTPUT "${CMAKE_CURRENT_BINARY_DIR}/${_res}"
                COMMAND ${CMAKE_COMMAND} -E copy "${CMAKE_CURRENT_SOURCE_DIR}/${_res}"
                "${CMAKE_CURRENT_BINARY_DIR}/${_res}"
                DEPENDS "${CMAKE_CURRENT_SOURCE_DIR}/${_res}")
    endforeach()
endmacro()

# Set our build targets.
add_target_languages(
        python
        python_grpc
        golang
        golang_grpc
        #typescript_grpc
)

# Generate base protobufs
add_protobufs(${CMAKE_SOURCE_DIR}/src/proto/dashboard.proto)
add_protobufs(${CMAKE_SOURCE_DIR}/src/proto/generation.proto)
add_protobufs(${CMAKE_SOURCE_DIR}/src/proto/completion.proto)
add_protobufs(${CMAKE_SOURCE_DIR}/src/proto/engines.proto)
generate_interfaces()

add_custom_command(
        OUTPUT "${golang_grpc_output_dir}/go.mod"
        WORKING_DIRECTORY "${GENERATED_PROTOBUF_PATH}"
        COMMAND rm -f go.mod
        COMMAND go mod init github.com/${PROJECT_REF}/gooseai
        COMMAND go mod tidy
        DEPENDS ${GENERATED_PROTOBUF_FILES_golang_grpc})

add_custom_target(
        generated ALL
        DEPENDS
        ${GENERATED_PROTOBUF_FILES_python}
        ${GENERATED_PROTOBUF_FILES_python_grpc}
        ${GENERATED_PROTOBUF_FILES_golang}
        ${GENERATED_PROTOBUF_FILES_golang_grpc}
        ${GENERATED_PROTOBUF_FILES_typescript_grpc}
        ${PROJECT_SOURCE_DIR}/gooseai/go.mod
)

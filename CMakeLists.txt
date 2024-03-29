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
set(PROTO_PATH "${PROJECT_SOURCE_DIR}/src/proto")
set(TENSORIZER_PROTO_PATH "${PROJECT_SOURCE_DIR}/src/tensorizer/proto")
set(GENERATED_PROTOBUF_PATH "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY ${GENERATED_PROTOBUF_PATH})

## Python target support
find_package(Python3 REQUIRED COMPONENTS Interpreter)

set(PYBUILD_PATH "${PROJECT_BINARY_DIR}/pybuild")
execute_process(COMMAND python3 -m venv ${PYBUILD_PATH}
        RESULT_VARIABLE EXIT_CODE
        OUTPUT_QUIET)
if (NOT ${EXIT_CODE} EQUAL 0)
    message(FATAL_ERROR
            "Could not create python3 env at ${PYBUILD_PATH}")
endif()

execute_process(COMMAND ${PYBUILD_PATH}/bin/pip3 show grpcio-tools grpcio protobuf
        RESULT_VARIABLE EXIT_CODE
        OUTPUT_QUIET)
if (NOT ${EXIT_CODE} EQUAL 0)
    execute_process(COMMAND ${PYBUILD_PATH}/bin/pip3 install -r ${PROJECT_SOURCE_DIR}/requirements.txt
                    RESULT_VARIABLE EXIT_CODE)
    if (NOT ${EXIT_CODE} EQUAL 0)
        message(FATAL_ERROR
                "Could not install python3 requirements at ${PYBUILD_PATH}")
    endif()
endif()


set(python_exec "${PYBUILD_PATH}/bin/python3")
set(python_args "-m" "grpc_tools.protoc")
set(python_plugin "")
set(python_output "--python_out=")
set(python_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY "${python_output_dir}")
file(WRITE "${PROJECT_SOURCE_DIR}/gooseai/__init__.py")
set(python_exts "_pb2.py")

set(python_grpc_exec "${PYBUILD_PATH}/bin/python3")
set(python_grpc_args "-m" "grpc_tools.protoc")
set(python_grpc_output "--grpc_python_out=")
set(python_grpc_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
set(python_grpc_plugin "")
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
set(golang_output "--go_out=paths=source_relative:")
set(golang_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY "${golang_output_dir}")
set(golang_exts ".go")

set(golang_grpc "")
set(golang_grpc_output "--go-grpc_out=paths=source_relative:")
set(golang_grpc_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY "${golang_grpc_output_dir}")
set(golang_grpc_exts "-grpc.go")

# Javascript / Typescript target support
execute_process(COMMAND npm version
       RESULT_VARIABLE EXIT_CODE
       OUTPUT_QUIET)
if (NOT ${EXIT_CODE} EQUAL 0)
   message(FATAL_ERROR
           "npm is not installed. Please ensure that it is installed by using your favorite package manager.")
endif()

set(ENV{npm_config_target_arch} x64)
execute_process(COMMAND npm install
       RESULT_VARIABLE EXIT_CODE)
if (NOT ${EXIT_CODE} EQUAL 0)
   message(FATAL_ERROR
           "npm install failed!")
endif()
set(NODE_BIN_DIRECTORY "${PROJECT_SOURCE_DIR}/node_modules/.bin")

set(javascript_exec "${PROJECT_SOURCE_DIR}/src/bin/protoc")
set(javascript_plugin "--plugin=protoc-gen-ts=${NODE_BIN_DIRECTORY}/protoc-gen-ts")
set(javascript_args "")
set(javascript_output "--js_out=import_style=commonjs,binary:")
set(javascript_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY "${javascript_output_dir}")
set(javascript_exts "_pb.js")

set(javascript_grpc_exec "${PROJECT_SOURCE_DIR}/src/bin/protoc")
set(javascript_grpc_plugin "--plugin=protoc-gen-ts=${NODE_BIN_DIRECTORY}/protoc-gen-ts" "--plugin=protoc-gen-grpc=${NODE_BIN_DIRECTORY}/grpc_tools_node_protoc_plugin")
set(javascript_grpc_args "")
set(javascript_grpc_output "--grpc_out=import_style=commonjs,binary:")
set(javascript_grpc_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY "${javascript_grpc_output_dir}")
set(javascript_grpc_exts "_grpc_pb.js")

set(typescript_web_exec "${PROJECT_SOURCE_DIR}/src/bin/protoc")
set(typescript_web_plugin  "--plugin=protoc-gen-ts=${NODE_BIN_DIRECTORY}/protoc-gen-ts")
set(typescript_web_args "")
set(typescript_web_output "--ts_out=service=grpc-web:")
set(typescript_web_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY "${typescript_output_dir}")
set(typescript_web_exts "_grpc_pb_service.d.ts;_grpc_pb_service.js")

set(typescript_node_exec "${PROJECT_SOURCE_DIR}/src/bin/protoc")
set(typescript_node_plugin "--plugin=protoc-gen-ts=${NODE_BIN_DIRECTORY}/protoc-gen-ts" "--plugin=protoc-gen-grpc=${NODE_BIN_DIRECTORY}/grpc_tools_node_protoc_plugin")
set(typescript_node_args "")
set(typescript_node_output "--ts_out=service=grpc-node:")
set(typescript_node_output_dir "${PROJECT_SOURCE_DIR}/gooseai")
file(MAKE_DIRECTORY "${typescript_output_dir}")
set(typescript_node_exts "_grpc_pb.d.ts")

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
    add_custom_command(
            OUTPUT ${OUTPUT_FILES}

            COMMAND "mkdir"
            ARGS "-p"
            ARGS "${${LANG}_output_dir}/${_PROTOBUF_SHORT}"

            COMMAND ${CMD_EXEC}
            ARGS ${${LANG}_args}
            ARGS "--proto_path=${PROTOBUF_INCLUDE_DIRS}"            
            ARGS "--proto_path=${PROTO_PATH}"
            ARGS "--proto_path=${TENSORIZER_PROTO_PATH}"
            ARGS "--experimental_allow_proto3_optional"
            ARGS ${${LANG}_plugin}
            ARGS "${${LANG}_output}${${LANG}_output_dir}/${_PROTOBUF_SHORT}"
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
        javascript
        javascript_grpc
        typescript_web
        typescript_node
)

# Generate base protobufs
add_protobufs(${CMAKE_SOURCE_DIR}/src/proto/dashboard.proto)
add_protobufs(${CMAKE_SOURCE_DIR}/src/proto/generation.proto)
add_protobufs(${CMAKE_SOURCE_DIR}/src/proto/engines.proto)
add_protobufs(${CMAKE_SOURCE_DIR}/src/proto/project.proto)
add_protobufs(${CMAKE_SOURCE_DIR}/src/proto/finetuning.proto)
generate_interfaces()

add_custom_command(
        OUTPUT "${golang_grpc_output_dir}/go.mod"
        WORKING_DIRECTORY "${GENERATED_PROTOBUF_PATH}"
        COMMAND rm -f go.mod
        COMMAND GOPROXY=direct go mod init github.com/${PROJECT_REF}/gooseai
        COMMAND go mod tidy
        DEPENDS ${GENERATED_PROTOBUF_FILES_golang_grpc})

# Tensorizer files
macro(copy_files FILES SRC DEST)
    set(DEPENDS_FILES "")
    foreach(_file ${FILES})
        list(APPEND OUTPUT_FILES "${DEST}/${_file}")
        add_custom_command(
            OUTPUT "${DEST}/${_file}"

            COMMAND "mkdir"
            ARGS "-p"
            ARGS "${DEST}"

            COMMAND cp
            ARGS "${SRC}/${_file}"
            ARGS "${DEST}"
            DEPENDS "${SRC}/${_file}")
    endforeach()
endmacro()

set(TENSORIZER_FILES "tensors_pb.d.ts;tensors_pb.js;tensors_pb2.py")
set(TENSORIZER_SRC "${PROJECT_SOURCE_DIR}/src/tensorizer/tensors")
set(TENSORIZER_DEST "${PROJECT_SOURCE_DIR}/gooseai/generation")

set(OUTPUT_FILES "")
copy_files("${TENSORIZER_FILES}" "${TENSORIZER_SRC}" "${TENSORIZER_DEST}")

add_custom_target(
        generated ALL
        DEPENDS
        ${GENERATED_PROTOBUF_FILES_python}
        ${GENERATED_PROTOBUF_FILES_python_grpc}
        ${GENERATED_PROTOBUF_FILES_golang}
        ${GENERATED_PROTOBUF_FILES_golang_grpc}
        ${GENERATED_PROTOBUF_FILES_javascript}
        ${GENERATED_PROTOBUF_FILES_javascript_grpc}
        ${GENERATED_PROTOBUF_FILES_typescript_web}
        ${GENERATED_PROTOBUF_FILES_typescript_node}
        ${PROJECT_SOURCE_DIR}/gooseai/go.mod
        ${OUTPUT_FILES}
)

// Code generated by protoc-gen-connect-swift. DO NOT EDIT.
//
// Source: stability_api/platform/project/v1/project.proto
//

import Connect
import Foundation
import SwiftProtobuf

///
/// gRPC services
internal protocol Stabilityai_Platformapis_Project_V1_ProjectServiceClientInterface {

    /// Create a new project if it does not exist
    @available(iOS 13, *)
    func `create`(request: Stabilityai_Platformapis_Project_V1_CreateProjectRequest, headers: Connect.Headers) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_Project>

    /// Update an existing project
    @available(iOS 13, *)
    func `update`(request: Stabilityai_Platformapis_Project_V1_UpdateProjectRequest, headers: Connect.Headers) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_Project>

    /// List all the projects for an organization
    @available(iOS 13, *)
    func `list`(headers: Connect.Headers) -> any Connect.ServerOnlyAsyncStreamInterface<Stabilityai_Platformapis_Project_V1_ListProjectRequest, Stabilityai_Platformapis_Project_V1_Project>

    /// Get a project
    @available(iOS 13, *)
    func `get`(request: Stabilityai_Platformapis_Project_V1_GetProjectRequest, headers: Connect.Headers) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_Project>

    /// Delete a project
    @available(iOS 13, *)
    func `delete`(request: Stabilityai_Platformapis_Project_V1_DeleteProjectRequest, headers: Connect.Headers) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_Project>

    /// Add or remove tags from an asset
    @available(iOS 13, *)
    func `tagAssets`(request: Stabilityai_Platformapis_Project_V1_TagAssetsRequest, headers: Connect.Headers) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_TagAssetsResponse>

    @available(iOS 13, *)
    func `untagAssets`(request: Stabilityai_Platformapis_Project_V1_UntagAssetsRequest, headers: Connect.Headers) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_UntagAssetsResponse>

    /// Query the assets of a project, with additional filtering
    @available(iOS 13, *)
    func `queryAssets`(request: Stabilityai_Platformapis_Project_V1_QueryAssetsRequest, headers: Connect.Headers) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_QueryAssetsResponse>

    /// Delete one or more assets of a project
    @available(iOS 13, *)
    func `deleteAssets`(request: Stabilityai_Platformapis_Project_V1_DeleteAssetsRequest, headers: Connect.Headers) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_DeleteAssetsResponse>
}

/// Concrete implementation of `Stabilityai_Platformapis_Project_V1_ProjectServiceClientInterface`.
internal final class Stabilityai_Platformapis_Project_V1_ProjectServiceClient: Stabilityai_Platformapis_Project_V1_ProjectServiceClientInterface {
    private let client: Connect.ProtocolClientInterface

    internal init(client: Connect.ProtocolClientInterface) {
        self.client = client
    }

    @available(iOS 13, *)
    internal func `create`(request: Stabilityai_Platformapis_Project_V1_CreateProjectRequest, headers: Connect.Headers = [:]) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_Project> {
        return await self.client.unary(path: "stabilityai.platformapis.project.v1.ProjectService/Create", request: request, headers: headers)
    }

    @available(iOS 13, *)
    internal func `update`(request: Stabilityai_Platformapis_Project_V1_UpdateProjectRequest, headers: Connect.Headers = [:]) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_Project> {
        return await self.client.unary(path: "stabilityai.platformapis.project.v1.ProjectService/Update", request: request, headers: headers)
    }

    @available(iOS 13, *)
    internal func `list`(headers: Connect.Headers = [:]) -> any Connect.ServerOnlyAsyncStreamInterface<Stabilityai_Platformapis_Project_V1_ListProjectRequest, Stabilityai_Platformapis_Project_V1_Project> {
        return self.client.serverOnlyStream(path: "stabilityai.platformapis.project.v1.ProjectService/List", headers: headers)
    }

    @available(iOS 13, *)
    internal func `get`(request: Stabilityai_Platformapis_Project_V1_GetProjectRequest, headers: Connect.Headers = [:]) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_Project> {
        return await self.client.unary(path: "stabilityai.platformapis.project.v1.ProjectService/Get", request: request, headers: headers)
    }

    @available(iOS 13, *)
    internal func `delete`(request: Stabilityai_Platformapis_Project_V1_DeleteProjectRequest, headers: Connect.Headers = [:]) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_Project> {
        return await self.client.unary(path: "stabilityai.platformapis.project.v1.ProjectService/Delete", request: request, headers: headers)
    }

    @available(iOS 13, *)
    internal func `tagAssets`(request: Stabilityai_Platformapis_Project_V1_TagAssetsRequest, headers: Connect.Headers = [:]) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_TagAssetsResponse> {
        return await self.client.unary(path: "stabilityai.platformapis.project.v1.ProjectService/TagAssets", request: request, headers: headers)
    }

    @available(iOS 13, *)
    internal func `untagAssets`(request: Stabilityai_Platformapis_Project_V1_UntagAssetsRequest, headers: Connect.Headers = [:]) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_UntagAssetsResponse> {
        return await self.client.unary(path: "stabilityai.platformapis.project.v1.ProjectService/UntagAssets", request: request, headers: headers)
    }

    @available(iOS 13, *)
    internal func `queryAssets`(request: Stabilityai_Platformapis_Project_V1_QueryAssetsRequest, headers: Connect.Headers = [:]) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_QueryAssetsResponse> {
        return await self.client.unary(path: "stabilityai.platformapis.project.v1.ProjectService/QueryAssets", request: request, headers: headers)
    }

    @available(iOS 13, *)
    internal func `deleteAssets`(request: Stabilityai_Platformapis_Project_V1_DeleteAssetsRequest, headers: Connect.Headers = [:]) async -> ResponseMessage<Stabilityai_Platformapis_Project_V1_DeleteAssetsResponse> {
        return await self.client.unary(path: "stabilityai.platformapis.project.v1.ProjectService/DeleteAssets", request: request, headers: headers)
    }

    internal enum Metadata {
        internal enum Methods {
            internal static let create = Connect.MethodSpec(name: "Create", service: "stabilityai.platformapis.project.v1.ProjectService", type: .unary)
            internal static let update = Connect.MethodSpec(name: "Update", service: "stabilityai.platformapis.project.v1.ProjectService", type: .unary)
            internal static let list = Connect.MethodSpec(name: "List", service: "stabilityai.platformapis.project.v1.ProjectService", type: .serverStream)
            internal static let get = Connect.MethodSpec(name: "Get", service: "stabilityai.platformapis.project.v1.ProjectService", type: .unary)
            internal static let delete = Connect.MethodSpec(name: "Delete", service: "stabilityai.platformapis.project.v1.ProjectService", type: .unary)
            internal static let tagAssets = Connect.MethodSpec(name: "TagAssets", service: "stabilityai.platformapis.project.v1.ProjectService", type: .unary)
            internal static let untagAssets = Connect.MethodSpec(name: "UntagAssets", service: "stabilityai.platformapis.project.v1.ProjectService", type: .unary)
            internal static let queryAssets = Connect.MethodSpec(name: "QueryAssets", service: "stabilityai.platformapis.project.v1.ProjectService", type: .unary)
            internal static let deleteAssets = Connect.MethodSpec(name: "DeleteAssets", service: "stabilityai.platformapis.project.v1.ProjectService", type: .unary)
        }
    }
}
import config from './../config/config.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	// * create post
	async createPost({ title, slug, content, featuredImage, status, userId }) {
		// eslint-disable-next-line no-useless-catch
		try {
			return await this.databases.createDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
					userId,
				}
			);
		} catch (error) {
			throw error;
		}
	}
	// * Update post
	async updatePost(slug, { title, content, featuredImage, status }) {
		// eslint-disable-next-line no-useless-catch
		try {
			return await this.databases.updateDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
				}
			);
		} catch (error) {
			throw error;
		}
	}
	// * Delete post
	async deletePost(slug) {
		// eslint-disable-next-line no-useless-catch
		try {
			return await this.databases.deleteDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug
			);
			// eslint-disable-next-line no-unreachable
			return true;
		} catch (error) {
			throw error;
			// eslint-disable-next-line no-unreachable
			return false;
		}
	}
	// * 1 post at time
	async getPost(slug) {
		// eslint-disable-next-line no-useless-catch
		try {
			return await this.databases.getDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug
			);
			// eslint-disable-next-line no-unreachable
			return true;
		} catch (error) {
			throw error;
			// eslint-disable-next-line no-unreachable
			return false;
		}
	}
	// * Post --> filter --> Status --> Active / In-Active
	// * make index in DB
	async getPosts(queries = [Query.equal('status', 'active')]) {
		// eslint-disable-next-line no-useless-catch
		try {
			return await this.databases.listDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				queries
				// * pagination give here
			);
		} catch (error) {
			throw error;
		}
	}

	// * File upload service
	async uploadFile(file) {
		// eslint-disable-next-line no-useless-catch
		try {
			return await this.bucket.createFile(
				config.appwriteBucketId,
				ID.unique(),
				file
			);
		} catch (error) {
			throw error;
			// eslint-disable-next-line no-unreachable
			return false;
		}
	}
	// * Delete file
	async deleteFile(fileId) {
		// eslint-disable-next-line no-useless-catch
		try {
			return await this.bucket.deleteFile(
				config.appwriteBucketId,

				fileId
			);
			// eslint-disable-next-line no-unreachable
			return true;
		} catch (error) {
			throw error;
			// eslint-disable-next-line no-unreachable
			return false;
		}
	}
	// * file Preview
	getFilePreview(fileId) {
		return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
	}
}

const service = new Service();

export default service;

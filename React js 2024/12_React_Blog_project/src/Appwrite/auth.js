// * Authentication --> Auth.js --> sign up, login, logout, current-user

import { Client, Account, ID } from 'appwrite';
import config from '../config/config';

export class AuthService {
	client = new Client();
	account;

	constructor() {
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.account = new Account(this.client);
	}

	// * Sign up
	async createAccount({ email, password, name }) {
		// eslint-disable-next-line no-useless-catch
		try {
			const userAccount = await this.account.create(
				ID.unique(),
				email,
				password,
				name
			);
			if (userAccount) {
				// * Account created --> re-direct to login page
				return this.Login({ email, password });
			} else {
				return userAccount;
			}
		} catch (error) {
			throw error;
		}
	}

	// * Log In
	async Login({ email, password }) {
		// eslint-disable-next-line no-useless-catch
		try {
			return await this.account.createEmailSession(email, password);
		} catch (error) {
			throw error;
		}
	}
	// * checking login --> current user
	async getCurrentUser() {
		// eslint-disable-next-line no-useless-catch
		try {
			return await this.account.get();
		} catch (error) {
			console.log("Appwrite service :: getCurrentUser :: error", error);
		}

		// eslint-disable-next-line no-unreachable
		return null;
	}
	// * log out
	async logout() {
		// eslint-disable-next-line no-useless-catch
		try {
			await this.account.deleteSessions();
		} catch (error) {
			console.log("Appwrite service :: logout :: error", error);
		}
	}
}

const authService = new AuthService();

export default authService;

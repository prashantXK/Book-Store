import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  UserCredential,
  sendPasswordResetEmail,
  authState,
  updateProfile,
  User
} from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = authState(this.afAuth);
  sendPasswordResetEmail(email: string | null) {
    throw new Error('Method not implemented.');
  }

  constructor(private afAuth: Auth) { }

  isUserRegistered(email: string): Promise<boolean> {
    return fetchSignInMethodsForEmail(this.afAuth, email)
      .then(signInMethods => {
        // If signInMethods is empty, it means the user is not registered
        return signInMethods.length > 0;
      })
      .catch(error => {
        console.error(error);
        // Handle the error appropriately
        throw error;
      });
  }

  // Sign up with email and password
  signUp(name: string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.afAuth, email, password)).pipe(switchMap(({ user }) => updateProfile(user, { displayName: name })));
  }

  // Login with email and password
  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  //reset password

  resetPassword(email: string) {
    return sendPasswordResetEmail(this.afAuth, email)
  }

  // Logout the currently authenticated user
  logout() {
    return from(this.afAuth.signOut());
  }

  // Check if the user is logged in
  // isLoggedIn(): Promise<boolean> {
  //   return this.afAuth.isLoggedIn();
  // }

  // Get the current user's information

  getCurrentUser(): Promise<User | null> {
    return new Promise<User | null>((resolve, reject) => {
      const unsubscribe = this.afAuth.onAuthStateChanged(user => {
        unsubscribe();
        resolve(user);
      }, reject);
    });
  }
  // Update the current user's information
  // updateUser(user: User): Promise<void> {
  //   return this.afAuth.updateUser(user);
  // }

  // Delete the current user's account
  // deleteUser(): Promise<void> {
  //   return this.afAuth.deleteUser();
  // }

}

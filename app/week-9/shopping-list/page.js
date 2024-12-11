"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {user ? (
        <>
          <h1 className="text-2xl font-bold">Welcome, {user.displayName}!</h1>
          <img
            src={user.photoURL}
            alt="User Avatar"
            className="w-16 h-16 rounded-full mt-4"
          />
          <button
            onClick={firebaseSignOut}
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
          >
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Sign in to access your Shopping List</h1>
          <button
            onClick={gitHubSignIn}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          >
            Sign In with GitHub
          </button>
        </>
      )}
    </div>
  );
}
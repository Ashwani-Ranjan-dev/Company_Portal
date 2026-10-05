const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (userData) => {
    const response = await fetch(
        `${API_URL}/api/auth/register`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            credentials: "include",

            body: JSON.stringify(userData),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }

    return data;
};

export const loginUser = async (credentials) => {
    const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            credentials: "include",

            body: JSON.stringify(credentials),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
};

export const getCurrentUser = async () => {
    const response = await fetch(
        `${API_URL}/api/auth/me`,
        {
            method: "GET",
            credentials: "include",
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Authentication failed");
    }

    return data;
};

export const logoutUser = async () => {
    const response = await fetch(
        `${API_URL}/api/auth/logout`,
        {
            method: "POST",
            credentials: "include",
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Logout failed");
    }

    return data;
};


// GET ALL EMPLOYEES
// ADMIN ONLY

export const getEmployees = async () => {
  const response = await fetch(
    `${API_URL}/api/users/admin/employees`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch employees"
    );
  }

  return data;
};



// GET ALL ADMINS
// EMPLOYEE ONLY


export const getAdmins = async () => {
  const response = await fetch(
    `${API_URL}/api/users/employee/admins`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Failed to fetch admins"
    );
  }

  return data;
};
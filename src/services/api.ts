// API Service untuk JSON Server

interface About {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface SkillItem {
  id: number;
  category: string;
  items: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

interface Contact {
  id: number;
  email: string;
  phone: string;
  address: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

const API_BASE = "/api";

// About API
export const aboutAPI = {
  getAll: async (): Promise<About[]> => {
    const response = await fetch(`${API_BASE}/about`);
    if (!response.ok) throw new Error("Failed to fetch about");
    return response.json();
  },
  getById: async (id: number): Promise<About> => {
    const response = await fetch(`${API_BASE}/about/${id}`);
    if (!response.ok) throw new Error("Failed to fetch about");
    return response.json();
  },
  create: async (data: Omit<About, "id">): Promise<About> => {
    const response = await fetch(`${API_BASE}/about`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create about");
    return response.json();
  },
  update: async (id: number, data: Partial<About>): Promise<About> => {
    const response = await fetch(`${API_BASE}/about/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update about");
    return response.json();
  },
  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE}/about/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete about");
  },
};

// Skills API
export const skillsAPI = {
  getAll: async (): Promise<SkillItem[]> => {
    const response = await fetch(`${API_BASE}/skills`);
    if (!response.ok) throw new Error("Failed to fetch skills");
    return response.json();
  },
  getById: async (id: number): Promise<SkillItem> => {
    const response = await fetch(`${API_BASE}/skills/${id}`);
    if (!response.ok) throw new Error("Failed to fetch skill");
    return response.json();
  },
  create: async (data: Omit<SkillItem, "id">): Promise<SkillItem> => {
    const response = await fetch(`${API_BASE}/skills`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create skill");
    return response.json();
  },
  update: async (id: number, data: Partial<SkillItem>): Promise<SkillItem> => {
    const response = await fetch(`${API_BASE}/skills/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update skill");
    return response.json();
  },
  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE}/skills/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete skill");
  },
};

// Projects API
export const projectsAPI = {
  getAll: async (): Promise<Project[]> => {
    const response = await fetch(`${API_BASE}/projects`);
    if (!response.ok) throw new Error("Failed to fetch projects");
    return response.json();
  },
  getById: async (id: number): Promise<Project> => {
    const response = await fetch(`${API_BASE}/projects/${id}`);
    if (!response.ok) throw new Error("Failed to fetch project");
    return response.json();
  },
  create: async (data: Omit<Project, "id">): Promise<Project> => {
    const response = await fetch(`${API_BASE}/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create project");
    return response.json();
  },
  update: async (id: number, data: Partial<Project>): Promise<Project> => {
    const response = await fetch(`${API_BASE}/projects/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update project");
    return response.json();
  },
  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE}/projects/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete project");
  },
};

// Contact API
export const contactAPI = {
  getAll: async (): Promise<Contact[]> => {
    const response = await fetch(`${API_BASE}/contact`);
    if (!response.ok) throw new Error("Failed to fetch contact");
    return response.json();
  },
  getById: async (id: number): Promise<Contact> => {
    const response = await fetch(`${API_BASE}/contact/${id}`);
    if (!response.ok) throw new Error("Failed to fetch contact");
    return response.json();
  },
  create: async (data: Omit<Contact, "id">): Promise<Contact> => {
    const response = await fetch(`${API_BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create contact");
    return response.json();
  },
  update: async (id: number, data: Partial<Contact>): Promise<Contact> => {
    const response = await fetch(`${API_BASE}/contact/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update contact");
    return response.json();
  },
  delete: async (id: number): Promise<void> => {
    const response = await fetch(`${API_BASE}/contact/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete contact");
  },
};

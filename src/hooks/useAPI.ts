import { useQuery } from "@tanstack/react-query";
import { aboutAPI, skillsAPI, projectsAPI, contactAPI } from "@/services/api";

// About hooks
export const useAbout = () => {
  return useQuery({
    queryKey: ["about"],
    queryFn: () => aboutAPI.getAll(),
  });
};

export const useAboutById = (id: number) => {
  return useQuery({
    queryKey: ["about", id],
    queryFn: () => aboutAPI.getById(id),
  });
};

// Skills hooks
export const useSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: () => skillsAPI.getAll(),
  });
};

export const useSkillById = (id: number) => {
  return useQuery({
    queryKey: ["skills", id],
    queryFn: () => skillsAPI.getById(id),
  });
};

// Projects hooks
export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => projectsAPI.getAll(),
  });
};

export const useProjectById = (id: number) => {
  return useQuery({
    queryKey: ["projects", id],
    queryFn: () => projectsAPI.getById(id),
  });
};

// Contact hooks
export const useContact = () => {
  return useQuery({
    queryKey: ["contact"],
    queryFn: () => contactAPI.getAll(),
  });
};

export const useContactById = (id: number) => {
  return useQuery({
    queryKey: ["contact", id],
    queryFn: () => contactAPI.getById(id),
  });
};

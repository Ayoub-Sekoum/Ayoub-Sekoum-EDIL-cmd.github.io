import { useState, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS as DEFAULT_PROJECTS } from '../data';

// Key for local storage
const STORAGE_KEY = 'edilmaster_projects';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Load projects on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem(STORAGE_KEY);
    if (savedProjects) {
      try {
        const parsed = JSON.parse(savedProjects);
        // Combine default projects with saved ones, or just use saved ones if you prefer
        // For this demo, we'll initialize with default if storage is empty, 
        // but if storage exists, we trust storage (so user can delete defaults if they want)
        setProjects(parsed);
      } catch (e) {
        console.error("Error parsing projects", e);
        setProjects(DEFAULT_PROJECTS);
      }
    } else {
      // First time load: use defaults
      setProjects(DEFAULT_PROJECTS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
    }
  }, []);

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: Date.now() }; // Simple ID generation
    const updatedProjects = [newProject, ...projects];
    setProjects(updatedProjects);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects));
  };

  const deleteProject = (id: number) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects));
  };

  return { projects, addProject, deleteProject };
};
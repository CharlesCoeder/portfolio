export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};

export const scrollToProject = (projectTitle: string) => {
  // Prevent the default header navigation behavior
  const projectsSection = document.getElementById("projects");
  const projectElements = document.querySelectorAll("[data-project-title]");
  const targetProject = Array.from(projectElements).find(
    (element) => element.getAttribute("data-project-title") === projectTitle
  );

  if (targetProject && projectsSection) {
    // Calculate the final scroll position
    const projectsOffset = projectsSection.offsetTop;
    const targetOffset =
      targetProject.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetOffset - 100,
      behavior: "smooth",
    });
  }
};

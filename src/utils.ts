export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") {
    return obj; // Return primitive types as is
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item)) as T; // Recursively clone arrays
  }

  const clonedObj: any = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key]); // Recursively clone objects
    }
  }

  return clonedObj;
};


export const get_error_message = (error: unknown): string => {
  const message =
    error instanceof Error
      ? error.message.replace(/firebase/gi, "Stall")
      : "Unknown error";

  return message;
};

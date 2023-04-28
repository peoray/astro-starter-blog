const slugify = (str: string): string => {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // remove non-word chars (excluding spaces and dashes)
      .replace(/[\s_-]+/g, '-') // replace spaces and underscores with a single dash
      .replace(/^-+|-+$/g, '') // remove leading/trailing dashes
  }

  export default slugify;
const searchProjectById = async (req, res) => {
    const { id } = req.params; // Assuming you pass the ID in the URL as a parameter
  
    const project = await Project.findById(id);
  
    if (!project) {
      throw new ApiError(404, "Project not found");
    }
  
    res.status(200).json(new ApiResponse(200, "Project found", project));
  };

  console.log(searchProjectById);
  
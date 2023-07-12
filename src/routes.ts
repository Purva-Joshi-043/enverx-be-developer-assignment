import express from "express";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "./controllers";
import { validationMiddleware } from "./middlewares/validation.middleware";
import { CreatePostDto, UpdatePostDto } from "./dtos/blog.dto";
const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPostById);
router.post("/posts", validationMiddleware(CreatePostDto), createPost);

router.put("/posts/:id", validationMiddleware(UpdatePostDto), updatePost);
router.delete("/posts/:id", deletePost);

export default router;

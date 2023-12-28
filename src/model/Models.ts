import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

export const UserModels = new PrismaClient().user;
export const PostModels = new PrismaClient().post;
export const ProfileModels = new PrismaClient().profile;
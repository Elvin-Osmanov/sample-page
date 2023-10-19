import { NextRequest, NextResponse } from "next/server";
import users from "./users.json";
import { connectToDB } from "@/lib/mongoose";
import User from "@/lib/models/user.model";
import bcrypt from "bcrypt";

export async function GET(request: NextRequest): Promise<NextResponse> {
  return NextResponse.json(users);
}

interface UserRequestBody {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface ErrorResponse {
  errors?: Record<string, string>;
  error?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { fullName, username, email, password, confirmPassword } =
      (await request.json()) as UserRequestBody;

    // Validation checks
    const errors: Record<string, string> = {};

    if (!fullName) {
      errors.fullName = "Full name is required";
    }

    if (!username) {
      errors.username = "Username is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Invalid email format";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length > 0) {
      const response: ErrorResponse = { errors };
      return NextResponse.json(response, { status: 400 });
    }

    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
      fullName,
      username,
      email,
      password: hashedPassword,
      confirmPassword,
    });

    const successResponse = { message: "Successful Operation" };
    return NextResponse.json(successResponse, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);

    const errorResponse: ErrorResponse = {
      error: "An error occurred while creating the user",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}

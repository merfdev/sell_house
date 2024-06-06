import Profile from "@/models/Profile";
import User from "@/models/Users";
import connectDB from "@/utils/connectDB";

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      amenities,
      rules,
      category,
    } = body;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کابری خود شوید" },
        { status: 401 }
      );
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "کاربری با ایمیل شما یافت نشد" },
        { status: 404 }
      );
    }
    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا همه فیلدها را پر کنید" },
        { status: 400 }
      );
    }
    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      constructionDate,
      category,
      amenities,
      rules,
      userId: user._id,
    });
    console.log(newProfile);
    return NextResponse.json(
      { message: "آگهی شما با موفقیت ثبت شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import Profile from "@/models/Profile";
import User from "@/models/Users";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    await connectDB();
    const id = context.params.profileId;
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
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "شما دسترسی به این آگهی را ندارید" },
        { status: 403 }
      );
    }
    const profile = await Profile.findOne({ _id: id });

    profile.published = true;
    profile.save();
    return NextResponse.json(
      { message: "آگهی با موفقیت منتشر شد" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "مشکلی پیش آمده" }, { status: 500 });
  }
}

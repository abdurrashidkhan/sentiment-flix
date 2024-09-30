// import connectMongodb from "@/lib/mongodb";
// import banner from "@/models/bannerSchema";
// import { ObjectId } from "mongodb";
// import { NextResponse } from "next/server";

// export async function PUT(request, { params }) {
//   const category = params?.data[0];
//   const id = params?.data[1];
//   await connectMongodb();
//   const filter = { _id: new ObjectId(id) };
//   const options = { upsert: false };
//   if (category === "movies") {
//     const {
//       title,
//       freeOrPaid,
//       catagories,
//       displaySection,
//       season,
//       episode,
//       contentSummary,
//       date,
//       smImage,
//       lgImage,
//       description,
//       video,
//     } = await request.json();
//     const updateDoc = {
//       title,
//       freeOrPaid,
//       catagories,
//       displaySection,
//       season,
//       episode,
//       contentSummary,
//       date,
//       smImage,
//       lgImage,
//       description,
//       video,
//     };

//     const result = await banner.findOneAndUpdate(
//       filter,
//       { $set: updateDoc },
//       options
//     );
//     return NextResponse.json(
//       { message: "update data success", status: true },
//       { status: 201 }
//     );
//   } else {
//     const {
//       title,
//       seriesName,
//       freeOrPaid,
//       displaySection,
//       catagories,
//       season,
//       episode,
//       contentSummary,
//       description,
//       date,
//       lgImage,
//       smImage,
//       video,
//     } = await request.json();
//     const filter = { _id: new ObjectId(id) };
//     const options = { upsert: false };
//     const updateDoc = {
//       title,
//       seriesName,
//       freeOrPaid,
//       displaySection,
//       catagories,
//       season,
//       episode,
//       contentSummary,
//       description,
//       date,
//       lgImage,
//       smImage,
//       video,
//     };

//     const result = await banner.findOneAndUpdate(
//       filter,
//       { $set: updateDoc },
//       options
//     );
//     return NextResponse.json(
//       { message: "update data success", status: true },
//       { status: 201 }
//     );
//   }
// }

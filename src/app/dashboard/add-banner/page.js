"use client";
import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import CheckAdmin from "@/components/Admin/CheckAdmin";
import CheckingUser from "@/components/Admin/checkingUser";
import insertBanner from "@/database/insert/insertBannerContent";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

export default function AddBanner() {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, OutError] = useSignOut(auth);
  const checkingUsers = CheckingUser(); // call checking user function

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    CheckAdmin(user, signOut);
  }, [user, signOut]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      const lgImageFile = data.lgImage[0];
      const smImageFile = data.smImage[0];
      let lgImageUrl = "";
      let smImageUrl = "";

      if (lgImageFile) {
        formData.append("file", lgImageFile);
        formData.append("upload_preset", "images_preset"); // Update with your preset name
        const imageResponse = await fetch(
          `https://api.cloudinary.com/v1_1/dqsqaozc0/upload`,
          {
            method: "POST",
            body: formData,
          }
        ).then((res) => res.json());

        if (imageResponse.secure_url) {
          lgImageUrl = imageResponse.secure_url;
        } else {
          throw new Error("Image upload failed");
        }
      }

      if (smImageFile) {
        formData.append("file", smImageFile);
        formData.append("upload_preset", "images_preset"); // Update with your preset name
        const imageResponse = await fetch(
          `https://api.cloudinary.com/v1_1/dqsqaozc0/upload`,
          {
            method: "POST",
            body: formData,
          }
        ).then((res) => res.json());

        if (imageResponse.secure_url) {
          smImageUrl = imageResponse.secure_url;
          // console.log(lgImage);
        } else {
          throw new Error("Image upload failed");
        }
      }

      // Example of project data including uploaded URLs
      const insertData = {
        title: data.title,
        seriesName: data.seriesName,
        freeOrPaid: data.freeOrPaid,
        displaySection: data.displaySection,
        catagories: data.catagories,
        season: data.season,
        episode: data.episode,
        contentSummary: data.contentSummary,
        description: data.description,
        date: new Date(),
        lgImage: lgImageUrl,
        smImage: smImageUrl,
        downloadUrl: data.downloadUrl,
        video: data.video,
      };
      // Handle form submission logic here (e.g., save to database)
      // await projectInsert(project, setIsLoading, reset);
      const seriesSubtitles = await insertBanner(
        insertData,
        setIsLoading,
        reset
      );
      // reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading || outLoading) {
    return <Loading />;
  }

  if (error || OutError) {
    console.error(error?.message || OutError?.message);
  }

  return (
    <div className="w-[98%] h-auto mb-5">
      <div
        id="project-content"
        className="rounded bg-[#1B1B1B] text-[#e7e6eb] shadow-2xl mb-[4rem]"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center md:text-start">
            <h1 className="text-2xl font-serif pt-4 pl-5">
              Add Banner Content
            </h1>
          </div>
          <div className="p-4 text-start">
            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
              {/* Title */}
              <div className="w-full">
                <label htmlhtmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                  placeholder="Type Here Title"
                  {...register("title", {
                    required: {
                      value: true,
                      maxLength: 60,
                      message:
                        "Title is required and should be less than 60 characters",
                    },
                  })}
                />
                {errors.title && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.title.message}
                  </span>
                )}
              </div>
              {/* Free or Paid */}
              <div className="w-full">
                <label htmlhtmlFor="seriesName">Series Name</label>
                <input
                  id="seriesName"
                  name="seriesName"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                  placeholder="enter series name"
                  {...register("seriesName", {
                    required: {
                      value: true,
                      message: "series name is required",
                    },
                  })}
                />
                {errors.seriesName && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.seriesName.message}
                  </span>
                )}
              </div>
            </div>
            {/* Content Season */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 pt-3">
              {/* Season */}
              <div className="w-full">
                <label htmlhtmlFor="season">Content Season</label>
                <input
                  id="season"
                  name="season"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                  placeholder="Season"
                  {...register("season", {
                    required: {
                      value: true,
                      message: "Season is required",
                    },
                  })}
                />
                {errors.season && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.season.message}
                  </span>
                )}
              </div>
              {/* Episode */}
              <div className="w-full">
                <label htmlhtmlFor="episode">Content Episode</label>
                <input
                  id="episode"
                  name="episode"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                  placeholder="Episode number"
                  {...register("episode", {
                    required: {
                      value: true,
                      message: "Episode number is required",
                    },
                  })}
                />
                {errors.episode && (
                  <span className="text-red-500 text-sm pt-2 capitalize">
                    {errors.episode.message}
                  </span>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
              <div className="w-full pt-4">
                <label htmlhtmlFor="catagories" className=" ">
                  Catagories
                </label>
                <select
                  name="catagories"
                  id="catagories"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                  {...register("catagories", {
                    required: {
                      value: true,
                      message: "Select Your content Catagories",
                    },
                  })}
                >
                  <option className="bg-[#1B1B1B]" selected disabled>
                    Select Your content Catagories
                  </option>
                  <option className="bg-[#1B1B1B]" value="series-subtitles">
                    সিরিজ এবং সাবটাইটেল{" "}
                  </option>
                  {/* <option className="bg-[#1B1B1B]" value="movies">
                    Movies{" "}
                  </option> */}
                  {/* <option value="sport">Sport</option> */}
                </select>
                <label className="">
                  {errors.catagories?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.catagories.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="w-full pt-4">
                <label htmlhtmlFor="displaySection" className=" ">
                  Where display ?
                </label>
                <select
                  name="displaySection"
                  id="displaySection"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                  {...register("displaySection", {
                    required: {
                      value: true,
                      message: "Select Your content displaySection",
                    },
                  })}
                >
                  <option className="py-2 bg-[#1B1B1B]" selected disabled>
                    Select where to display
                  </option>
                  {/* <option className="py-2 bg-[#1B1B1B]" value="coming-soon">
                    শিঘ্রই দেখতে পাবেন{" "}
                  </option> */}
                  <option className="py-2 bg-[#1B1B1B]" value="main-banner">
                    Main Banner
                  </option>

                  {/* <option value="sport">Sport</option> */}
                </select>
                <label className="">
                  {errors.displaySection?.type === "required" && (
                    <span className="text-red-500 text-sm pt-2 capitalize">
                      {errors.displaySection.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            <div className="w-full pt-3">
              <label htmlhtmlFor="freeOrPaid">Free or Paid</label>
              <select
                id="freeOrPaid"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                {...register("freeOrPaid", {
                  required: {
                    value: true,
                    message: "Select Free or Paid",
                  },
                })}
              >
                <option value="" className="bg-[#1B1B1B]" disabled>
                  Select here
                </option>
                <option value="paid" className="bg-[#1B1B1B]">
                  Paid
                </option>
                <option value="free" className="bg-[#1B1B1B]">
                  Free
                </option>
              </select>
              {errors.freeOrPaid && (
                <span className="text-red-500 text-sm pt-2 capitalize">
                  {errors.freeOrPaid.message}
                </span>
              )}
            </div>
            {/* Content Summary */}
            <div className="pt-3">
              <label htmlhtmlFor="contentSummary">Content Summary</label>
              <textarea
                cols="10"
                rows="5"
                id="contentSummary"
                name="contentSummary"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                placeholder="Enter content summary"
                {...register("contentSummary", {
                  required: {
                    value: true,
                    message: "Content summary is required",
                  },
                })}
              />
              {errors.contentSummary && (
                <span className="text-red-500 text-sm pt-2 capitalize">
                  {errors.contentSummary.message}
                </span>
              )}
            </div>
            {/* Description */}
            <div className="pt-3">
              <label htmlhtmlFor="description">Description</label>
              <textarea
                cols="10"
                rows="5"
                id="description"
                name="description"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                placeholder="Type Here project Description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                })}
              />
              {errors.description && (
                <span className="text-red-500 text-sm pt-2 capitalize">
                  {errors.description.message}
                </span>
              )}
            </div>
            {/* download url */}
            <div className="pt-3">
              <label htmlhtmlFor="downloadUrl"> Video download URL</label>
              <input
                id="downloadUrl"
                name="downloadUrl"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                placeholder="enter your download video url"
                {...register("downloadUrl", {
                  required: {
                    value: true,
                    message: "enter your download video url",
                  },
                })}
              />
              {errors.downloadUrl && (
                <span className="text-red-500 text-sm pt-2 capitalize">
                  {errors.downloadUrl.message}
                </span>
              )}
            </div>
            {/* Video */}
            <div className="pt-3">
              <label htmlhtmlFor="video"> Video Preview URL</label>
              <input
                id="video"
                name="video"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                placeholder="enter your video url"
                {...register("video", {
                  required: {
                    value: true,
                    message: "enter your video url",
                  },
                })}
              />
              {errors.video && (
                <span className="text-red-500 text-sm pt-2 capitalize">
                  {errors.video.message}
                </span>
              )}
            </div>
            {/* Image */}
            <div className="pt-3">
              <label htmlhtmlFor="lgImage">Thumbnail Image (1280 * 720)</label>
              <input
                id="lgImage"
                name="lgImage"
                type="file"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                {...register("lgImage", {
                  required: {
                    value: true,
                    message: "lgImage is required",
                  },
                })}
              />
              {errors.lgImage && (
                <span className="text-red-500 text-sm pt-2 capitalize">
                  {errors.lgImage.message}
                </span>
              )}
            </div>
            {/* Image */}
            <div className="pt-3">
              <label htmlhtmlFor="smImage">Thumbnail Image (433 * 640)</label>
              <input
                id="smImage"
                name="smImage"
                type="file"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700  text-slate-400  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm bg-[#1f296117]   mt-2"
                {...register("smImage", {
                  required: {
                    value: true,
                    message: "Image is required",
                  },
                })}
              />
              {errors.smImage && (
                <span className="text-red-500 text-sm pt-2 capitalize">
                  {errors.smImage.message}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner"></span> uploading...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [favAnime, setFavAnime] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !favAnime || !reason) return alert("Fill all fields!");
    console.log({ name, favAnime, reason });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-center text-orange-700">
          Share Your Favorite Anime
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
          <input
            type="text"
            placeholder="Favorite anime"
            value={favAnime}
            onChange={(e) => setFavAnime(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
          <textarea
            rows={4}
            placeholder="Tell us why?"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-2 bg-orange-600 text-white rounded hover:bg-orange-700 disabled:opacity-60"
          >
            {submitted ? "Thanks for sharing!" : "Submit"}
          </button>
        </form>

        <button
          onClick={() => navigate("/")}
          className="mt-4 w-full py-2 border border-orange-600 text-orange-600 rounded hover:bg-orange-100"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Form;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const Form = () => {
  const [name, setName] = useState("");
  const [favoriteAnime, setFavoriteAnime] = useState("");
  const [whyAnime, setWhyAnime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !favoriteAnime || !whyAnime) {
      return alert("Please fill in all fields before submitting!");
    }

    try {
      const { error } = await supabase
        .from("anime_responses")
        .insert([
          {
            name,
            favorite_anime: favoriteAnime,
            reason: whyAnime,
            submitted_at: new Date(),
          },
        ]);

      if (error) throw error;

      setIsSubmitted(true);
      setFeedback(" Your response has been recorded.");

      setName("");
      setFavoriteAnime("");
      setWhyAnime("");
    } catch (error) {
      console.error("Supabase insert error:", error);
      setFeedback(" Something went wrong: " + error.message);
    }
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
            value={favoriteAnime}
            onChange={(e) => setFavoriteAnime(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
          <textarea
            rows={4}
            placeholder="Tell us why this anime is your favorite"
            value={whyAnime}
            onChange={(e) => setWhyAnime(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
          />

          <button
            type="submit"
            disabled={isSubmitted}
            className="w-full py-2 bg-orange-600 text-white rounded hover:bg-orange-700 disabled:opacity-60"
          >
            {isSubmitted ? "Submitted!" : "Submit"}
          </button>
        </form>

        {feedback && <p className="mt-3 text-center text-sm">{feedback}</p>}

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

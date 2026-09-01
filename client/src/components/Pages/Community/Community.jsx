import {
  Heart,
  MessageCircle,
  Share2,
  Trophy,
  Users,
  Flame,
  CalendarDays,
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  Clock,
} from "lucide-react";

const posts = [
  {
    name: "Rahul Sharma",
    time: "2 hours ago",
    avatar:
      "https://i.pravatar.cc/150?img=12",
    text: "Just completed my first 10K run! 🏃🔥 Feeling stronger every day.",
    likes: 124,
    comments: 18,
  },
  {
    name: "Sarah Wilson",
    time: "5 hours ago",
    avatar:
      "https://i.pravatar.cc/150?img=47",
    text: "Finally hit my personal squat record today! 100 KG 💪",
    likes: 96,
    comments: 12,
  },
];

const challenges = [
  {
    title: "30-Day Push-Up Challenge",
    participants: "328",
    progress: 75,
    icon: Dumbbell,
  },
  {
    title: "10K Steps Challenge",
    participants: "245",
    progress: 60,
    icon: Flame,
  },
  {
    title: "30-Day Fitness Challenge",
    participants: "512",
    progress: 45,
    icon: Trophy,
  },
];

const leaderboard = [
  { rank: 1, name: "Rahul Sharma", xp: "1,250 XP" },
  { rank: 2, name: "Alex Johnson", xp: "1,120 XP" },
  { rank: 3, name: "Sarah Wilson", xp: "980 XP" },
  { rank: 4, name: "Michael Carter", xp: "850 XP" },
  { rank: 5, name: "Emma Wilson", xp: "790 XP" },
];

const groups = [
  {
    name: "Bodybuilding",
    members: "1,250",
    icon: "💪",
  },
  {
    name: "Weight Loss",
    members: "890",
    icon: "🔥",
  },
  {
    name: "Running",
    members: "640",
    icon: "🏃",
  },
  {
    name: "Boxing",
    members: "420",
    icon: "🥊",
  },
];

const Community = () => {
  return (
    <main className="bg-black text-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[65vh] overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-7xl items-center px-6 py-20">

          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.4em] text-red-500">
              GYMX Community
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
              Stronger
              <span className="block text-red-500">
                Together
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              Connect with people who share your passion for fitness.
              Share your progress, join challenges, meet workout partners,
              and motivate each other every day.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <button className="flex items-center justify-center gap-2 rounded-md bg-red-500 px-7 py-4 font-bold uppercase transition hover:bg-red-600">
                Join Community
                <ArrowRight size={18} />
              </button>

              <button className="rounded-md border border-white/30 px-7 py-4 font-bold uppercase backdrop-blur-sm transition hover:border-red-500 hover:bg-red-500">
                Explore Challenges
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMUNITY STATS
      ====================================================== */}
      <section className="border-y border-zinc-800 bg-zinc-950">

        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

          {[
            ["5K+", "Community Members", Users],
            ["250+", "Active Daily", CheckCircle2],
            ["50+", "Fitness Challenges", Trophy],
            ["20+", "Workout Groups", Users],
          ].map(([number, title, Icon], index) => (

            <div
              key={index}
              className="flex items-center justify-center gap-4 border-zinc-800 px-5 py-8 sm:border-r"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                <Icon size={24} />
              </div>

              <div>
                <h3 className="text-2xl font-black sm:text-3xl">
                  {number}
                </h3>

                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  {title}
                </p>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          COMMUNITY FEED
      ====================================================== */}
      <section className="bg-zinc-950 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              What's Happening
            </p>

            <h2 className="text-4xl font-black uppercase sm:text-5xl">
              Community <span className="text-red-500">Feed</span>
            </h2>

          </div>

          <div className="grid gap-7 lg:grid-cols-3">

            {/* Feed */}
            <div className="space-y-6 lg:col-span-2">

              {posts.map((post, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                >

                  {/* User */}
                  <div className="flex items-center gap-4">

                    <img
                      src={post.avatar}
                      alt={post.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-bold">
                        {post.name}
                      </h3>

                      <p className="text-xs text-zinc-500">
                        {post.time}
                      </p>
                    </div>

                  </div>

                  {/* Post */}
                  <p className="mt-5 leading-7 text-zinc-300">
                    {post.text}
                  </p>

                  {/* Actions */}
                  <div className="mt-6 flex items-center gap-6 border-t border-zinc-800 pt-5">

                    <button className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-red-500">
                      <Heart size={18} />
                      {post.likes}
                    </button>

                    <button className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-red-500">
                      <MessageCircle size={18} />
                      {post.comments}
                    </button>

                    <button className="ml-auto text-zinc-400 transition hover:text-white">
                      <Share2 size={18} />
                    </button>

                  </div>

                </div>

              ))}

              <button className="w-full rounded-lg border border-zinc-700 py-4 text-sm font-bold uppercase transition hover:border-red-500 hover:bg-red-500">
                View More Posts →
              </button>

            </div>


            {/* Create Post */}
            <div className="h-fit rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <h3 className="text-xl font-black uppercase">
                Share Your Progress
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Completed a great workout? Hit a new personal record?
                Share it with the community.
              </p>

              <textarea
                placeholder="What's on your mind?"
                className="mt-6 h-32 w-full resize-none rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-red-500"
              />

              <button className="mt-4 w-full rounded-lg bg-red-500 py-3 font-bold uppercase transition hover:bg-red-600">
                Create Post
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHALLENGES
      ====================================================== */}
      <section className="bg-black py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Push Your Limits
            </p>

            <h2 className="text-4xl font-black uppercase sm:text-5xl">
              Fitness <span className="text-red-500">Challenges</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
              Challenge yourself, compete with others, and stay motivated
              throughout your fitness journey.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {challenges.map((challenge, index) => {

              const Icon = challenge.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition hover:-translate-y-2 hover:border-red-500"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                      <Icon size={28} />
                    </div>

                    <span className="text-xs text-zinc-500">
                      {challenge.participants} participants
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-black uppercase">
                    {challenge.title}
                  </h3>

                  <div className="mt-6">

                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-zinc-500">
                        Challenge Progress
                      </span>

                      <span className="font-bold text-red-500">
                        {challenge.progress}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

                      <div
                        className="h-full rounded-full bg-red-500"
                        style={{
                          width: `${challenge.progress}%`,
                        }}
                      />

                    </div>

                  </div>

                  <button className="mt-7 flex items-center gap-2 text-sm font-bold uppercase text-red-500 transition group-hover:text-white">
                    Join Challenge
                    <ArrowRight size={16} />
                  </button>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERBOARD
      ====================================================== */}
      <section className="bg-zinc-950 py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Compete & Improve
            </p>

            <h2 className="text-4xl font-black uppercase sm:text-5xl">
              Weekly <span className="text-red-500">Leaderboard</span>
            </h2>

          </div>


          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

            {leaderboard.map((member, index) => (

              <div
                key={index}
                className={`flex items-center gap-5 border-b border-zinc-800 px-6 py-5 last:border-0 ${
                  index === 0 ? "bg-red-500/5" : ""
                }`}
              >

                {/* Rank */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-800 font-black">
                  {member.rank === 1
                    ? "🥇"
                    : member.rank === 2
                    ? "🥈"
                    : member.rank === 3
                    ? "🥉"
                    : member.rank}
                </div>

                {/* Name */}
                <div className="flex-1">
                  <h3 className="font-bold">
                    {member.name}
                  </h3>

                  <p className="text-xs text-zinc-500">
                    Fitness Warrior
                  </p>
                </div>

                {/* XP */}
                <div className="font-bold text-red-500">
                  {member.xp}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GROUPS
      ====================================================== */}
      <section className="bg-black py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
                Find Your People
              </p>

              <h2 className="text-4xl font-black uppercase sm:text-5xl">
                Workout <span className="text-red-500">Groups</span>
              </h2>

            </div>

            <button className="w-fit text-sm font-bold uppercase text-red-500 hover:text-white">
              View All Groups →
            </button>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {groups.map((group, index) => (

              <div
                key={index}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-7 text-center transition hover:-translate-y-2 hover:border-red-500"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800 text-3xl">
                  {group.icon}
                </div>

                <h3 className="mt-5 text-xl font-black uppercase">
                  {group.name}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  {group.members} members
                </p>

                <button className="mt-6 w-full rounded-lg border border-zinc-700 py-3 text-sm font-bold uppercase transition group-hover:border-red-500 group-hover:bg-red-500">
                  Join Group
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EVENTS
      ====================================================== */}
      <section className="bg-zinc-950 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
              Don't Miss Out
            </p>

            <h2 className="text-4xl font-black uppercase sm:text-5xl">
              Community <span className="text-red-500">Events</span>
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            {[
              ["12", "SEP", "GYMX Fitness Challenge", "7:00 AM"],
              ["20", "SEP", "Outdoor Group Workout", "6:30 AM"],
              ["28", "SEP", "Nutrition Workshop", "5:00 PM"],
            ].map(([day, month, title, time], index) => (

              <div
                key={index}
                className="flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >

                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-red-500">

                  <span className="text-2xl font-black">
                    {day}
                  </span>

                  <span className="text-xs font-bold">
                    {month}
                  </span>

                </div>

                <div>

                  <h3 className="text-lg font-black uppercase">
                    {title}
                  </h3>

                  <p className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
                    <Clock size={15} />
                    {time}
                  </p>

                  <button className="mt-4 text-sm font-bold uppercase text-red-500">
                    Register →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-red-600 py-20">

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

          <Users className="mx-auto mb-6" size={45} />

          <h2 className="text-4xl font-black uppercase sm:text-6xl">
            Your Journey.
            <br />
            Your Community.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm text-red-100 sm:text-base">
            Surround yourself with people who motivate you, challenge you,
            and celebrate your achievements.
          </p>

          <button className="mt-8 rounded-lg bg-black px-8 py-4 font-black uppercase transition hover:bg-zinc-900">
            Join The Community →
          </button>

        </div>

      </section>

    </main>
  );
};

export default Community;
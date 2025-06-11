<template>
  <section class="px-6 py-16 lg:px-32 space-y-12 text-white/75">
    <div class="text-center">
      <h1 class="text-red font-bold uppercase text-8xl">Who We Are</h1>
      <p class="mt-12 max-w-3xl mx-auto text-xl text-white/75">
        Every runner has a breakthrough inside them. <br /><br />A moment when it all comes
        together—the work, the belief, the heart—and you do something you once thought was
        <span class="italic">impossible</span>. A race that redefines your limits. A goal that
        changes how you see yourself. <br /><br />We call that your
        <strong class="text-light-red">eclipse</strong>. <br />And helping you get there is why we
        exist.
      </p>
    </div>

    <div class="max-w-4xl mx-auto space-y-32 mt-48">
      <div>
        <h2 class="text-6xl font-extrabold uppercase text-light-red">What We Believe</h2>
        <ul class="pl-4 mt-4 space-y-12 text-xl">
          <li>
            <span class="font-bold text-3xl">#1 The Right Support Changes Everything</span><br />
            You don’t need to be a pro to be taken seriously.
          </li>
          <li>
            <span class="font-bold text-3xl">#2 Breakthroughs Aren’t Random</span><br />They come
            from smart training and consistent support.
          </li>
          <li>
            <span class="font-bold text-3xl">#3 Running is Personal</span><br />We coach humans, not
            just splits and schedules.
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-5xl font-extrabold uppercase text-light-red">What We Offer</h2>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>
            <span class="font-bold">Custom Training Plans:</span> Tailored to your goals and
            lifestyle.
          </li>
          <li>
            <span class="font-bold">1-on-1 & Group Coaching:</span> Weekly check-ins, flexible
            contact, and honest guidance.
          </li>
          <li>
            <span class="font-bold">Training Pods:</span> Matched groups to train, grow, and stay
            accountable together.
          </li>
          <li>
            <span class="font-bold">Optional Add-Ons:</span> Nutrition tips, shoe/gear advice, and
            bonus coaching calls.
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-semibold">Why "Eclipse"?</h2>
        <p class="mt-4">
          A real eclipse is rare, awe-inspiring, and unforgettable—just like a personal breakthrough
          in running. We call these moments <span class="text-light-red">eclipse moments</span>—when
          your belief catches up to your ability, and something incredible happens. Our job is to
          help you get there.
        </p>
      </div>

      <div>
        <h2 class="text-2xl font-semibold">Who We Are</h2>
        <p class="mt-4">
          We’re three former NCAA DII runners who’ve raced at nationals, led teams to conference
          titles, and trained through setbacks and comebacks. Our coaching is shaped by years of
          experience—<span class="text-light-red">not just theory</span>—and a shared mission to
          help athletes rise.
        </p>
        <router-link
          to="/coaches"
          class="inline-block mt-4 text-light-red underline hover:text-red-600 transition"
          >Meet the Coaches →</router-link
        >
      </div>

      <div>
        <h2 class="text-2xl font-semibold">Our Coaching Promise</h2>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>You’ll get a plan built for you—not from a template.</li>
          <li>You’ll be challenged, heard, and supported.</li>
          <li>We lead with clarity, care, and consistency.</li>
          <li>
            We’ll celebrate your <span class="text-light-red">eclipse moment</span> like it’s our
            own.
          </li>
        </ul>
      </div>

      <div class="text-center pt-8">
        <p class="text-xl">
          You're not just here to train.
          <span class="text-light-red">You're here to transform.</span>
        </p>
        <div class="mt-6 space-x-4">
          <router-link
            to="/coaches"
            class="bg-light-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
            >Explore Coaching Options</router-link
          >
          <router-link
            to="/contact"
            class="border border-light-red text-light-red px-6 py-3 rounded-md hover:bg-light-red hover:text-white transition"
            >Get in Touch</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

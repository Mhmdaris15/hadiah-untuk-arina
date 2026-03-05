**Act as an expert React frontend developer and UX/UI designer. I need you to write the complete code for a single-page interactive greeting card using React and Tailwind CSS.** 

**The Context:** This is a personalized digital greeting card for a girl named Arina Lotosvili for International Women's Day. She studies mathematics, is of Armenian and Georgian descent, and is traveling to Moscow with her family.

**Design & Vibe Requirements:**

* **Color Palette:** Spring tulips. Use soft peach backgrounds (bg-orange-50 or similar), vibrant orange/coral accents, and soft cream.  
* **Style:** Modern glassmorphism. Use translucent cards with backdrop blur (bg-white/40 backdrop-blur-md border border-white/50), rounded corners, and soft drop shadows.  
* **Background Elements:** Create a subtle background effect with floating, faded mathematics symbols (π, ∑, ∞, ∫) to playfully nod to her major. They should drift slowly or pulse.

**Functional & Content Requirements:**

1. **Multilingual Header (React State):** Use a useEffect hook to cycle a greeting text every 3 seconds, fading smoothly between these four languages:  
   * "С 8 Марта\!" (Russian)  
   * "Selamat Hari Perempuan\!" (Indonesian)  
   * "გილოცავთ ქალთა საერთაშორისო დღეს\!" (Georgian)  
   * "Շնորհավոր Կանանց միջազգային օրը\!" (Armenian)  
2. **Personalized Subheader:** Below the cycling text, add an elegant, stylized header: *"Для Арины Лотошвили"* using a serif-style font class.  
3. **The Main Message:** Inside the glassmorphism card, write: *"Wishing you an amazing holiday and a safe trip to Moscow with your family\! Take a well-deserved break from the math equations today."*  
4. **Interactive Ticket Reveal (React State):** \* Below the message, create a stylish, pulsing button that says "Tap for a post-Moscow surprise 🎁".  
   * When clicked, the button should disappear and smoothly expand/reveal a "Ticket" component (use a dashed border to make it look like a physical ticket).  
   * Ticket Content:  
     * **🎟️ Official Ticket for an Adventure**  
     * **Destination:** Vyborg Old Town & Castle  
     * **Status:** Valid as soon as you get back to Saint Petersburg\!  
5. **Footer:** At the absolute bottom of the screen, add small, muted text: *"Powered by Boba Tea & Good Vibes 🧋"*

**Technical Constraints:**

* Use fully responsive Tailwind utility classes (mobile-first design, as it will be opened on a phone via QR code).  
* Use standard Tailwind classes for animations (e.g., animate-pulse, animate-bounce, or transition utilities) to keep it simple without needing external CSS files.  
* Ensure the layout is centered on the screen vertically and horizontally (min-h-screen flex flex-col items-center justify-center).
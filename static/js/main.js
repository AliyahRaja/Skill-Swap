function animateCount(id, target, duration, lang) {
  const el = document.getElementById(id);
  if (!el) return; // Added check if element exists
  let start = 0;
  const increment = Math.ceil(target / (duration / 16));
  const counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(counter);
    }
    // Use appropriate locale for number formatting
    el.textContent = start.toLocaleString(lang === 'ar' ? 'ar-SA' : 'en-US');
  }, 16);
}

// --- Language Selection Logic ---

// Store translations
const translations = {
  en: {
    page_title: "Skill Swap Platform - Home",
    logo_text: "Skill Swap",
    // Added translations for Navbar links
    nav_home: "Home",
    nav_search: "Search",
    nav_login: "Login",
    nav_signup: "Sign Up",
    nav_profile: "Profile",
    nav_admin: "Manage Users",
    nav_logout: "Logout",
    registered_users: "Registered Users",
    have_skill_q: "Do you have a skill?",
    signup_link: "Sign Up",
    hero_title: "Discover and Share Skills",
    hero_paragraph: "Connect with people who want to learn and those who are ready to teach. Join our community and grow your knowledge by sharing what you know and learning what you don't.",
    get_started_button: "Get Started",
    how_it_works_title: "How It Works",
    how_it_works_image_alt: "Conceptual image showing tangled thoughts leading to a clear idea with a lightbulb.",
    how_it_works_image_description: "From complex ideas to clear solutions: the journey of learning and exchange.",
    step1_text: "1. Search for a skill you want to learn",
    step2_text: "2. Connect with someone who offers it",
    step3_text: "3. Exchange knowledge and grow together",
    testimonials_title: "What Our Users Say",
    testimonial1_text: "Skill Swap helped me build confidence in speaking Spanish by connecting me with native speakers.",
    testimonial1_user: "— Atheer H.",
    testimonial2_text: "I finally learned graphic design while teaching others how to play piano. A perfect match!",
    testimonial2_user: "— Bdour Q.",
    write_testimonial_title: "Write Your Testimonial",
    testimonial_name_placeholder: "Your Name",
    testimonial_message_placeholder: "Your feedback...",
    testimonial_submit_button: "Submit",
    testimonial_status_success: "✅ Thank you for your feedback!",
    testimonial_status_fail: "❌ Failed to send. Try again.",
    footer_copyright: "© 2025 Skill Swap |",
    footer_about: "About",
    footer_contact: "Contact",
    footer_support: "Support",
    chatbot_header_title: "Help & Support",
    chatbot_online_status: "Online",
    chatbot_timestamp: "Today at 9:23 AM",
    chatbot_initial_message: "👋 Hello! I'm here to help. Choose an option below:",
    chatbot_quick_reply1: "How do I contact a user?",
    chatbot_quick_reply2: "I forgot my password.",
    chatbot_quick_reply3: "Where can I edit my profile?",
    chatbot_bot_response1: 'Click "Contact via Email" on user profiles.',
    chatbot_bot_response2: 'Go to login page and click "Forgot Password".',
    chatbot_bot_response3: 'You can edit your profile from the Profile page.',
    // Login page specific translations
    page_title_login: "Login - Skill Swap",
    login_title: "Login",
    login_email_placeholder: "Email",
    login_password_placeholder: "Password",
    login_button: "Login",
     // Signup page specific translations
    page_title_signup: "Sign Up - Skill Swap",
    signup_title: "Sign Up",
    signup_name_placeholder: "Full Name",
    signup_email_placeholder: "Email",
    signup_password_placeholder: "Password",
    signup_offers_placeholder: "Skills You Offer",
    signup_wants_placeholder: "Skills You Want to Learn",
    signup_button: "Create Account",
    signup_success_message: "✅ Account created successfully! Redirecting...",
    signup_fail_message: "Failed to sign up.",
    // Contact page specific translations
    page_title_contact: "Contact - Skill Swap",
    contact_title: "Contact Us",
    contact_intro: "Have questions, suggestions, or feedback?<br>We'd love to hear from you.",
    contact_sender_label: "Your Email",
    contact_sender_placeholder: "your@email.com",
    contact_type_label: "Message Type",
    contact_type_choose: "Choose...",
    contact_type_question: "Question",
    contact_type_suggestion: "Suggestion",
    contact_type_feedback: "Feedback",
    contact_message_label: "Your Message",
    contact_message_placeholder: "Type your message...",
    contact_submit_button: "Send Message",
    contact_status_success: "✅ Message sent successfully!",
    contact_status_fail: "❌ Failed to send message.",
    // About page specific translations
    page_title_about: "About - Skill Swap",
    about_title: "About Skill Swap",
    about_paragraph1: "Skill Swap is a collaborative platform designed to help people share and exchange skills with each other.<br>Whether you're a professional wanting to teach your expertise, or a learner eager to grow — Skill Swap connects you with the right people in your community.",
    about_paragraph2: "Our mission is to make learning more accessible, personalized, and community-driven — because everyone has something valuable to share, and something new to learn.",
    about_team_title: "Meet Our Team",
     // Support page specific translations
    page_title_support: "Support - Skill Swap",
    support_title: "Support",
    support_paragraph1: "Need help using Skill Swap? We're here to assist you with any issues or questions you may have.",
    support_paragraph2: "📩 Reach our support team anytime at:<br>",
    support_email: "support@skillswap.sa",
    support_paragraph3: "We typically respond within <strong>24 hours</strong>. Your experience matters to us.",
    // Search page specific translations
    page_title_search: "Search - Skill Swap",
    search_title: "Search for Users",
    search_placeholder: "Search by name or skill...",
    search_no_users: "No users found.",
    search_card_offers: "Offers:",
    search_card_wants: "Wants:",
    search_card_view_profile: "View Profile",
    // User page specific translations
    page_title_user: "User Profile - Skill Swap",
    user_loading: "Loading profile...",
    user_missing_id: "User ID is missing.",
    user_not_found: "User not found.",
    user_bio_label: "Bio:",
    user_offers_label: "Offers:",
    user_wants_label: "Wants to Learn:",
    user_contact_email_button: "Contact via Email",
    user_back_to_search: "Back to Search",
    user_no_bio: "No bio provided.",
    user_no_skills_offered: "No skills listed.",
    user_no_preferences_listed: "No preferences listed.",
    // Profile page specific translations
    page_title_profile: "My Profile - Skill Swap",
    profile_title: "My Profile",
    profile_name_label: "Name:",
    profile_email_label: "Email:",
    profile_bio_placeholder: "Your bio...",
    profile_offers_placeholder: "Skills You Offer",
    profile_wants_placeholder: "Skills You Want to Learn",
    profile_new_password_placeholder: "New Password (optional)",
    profile_update_button: "Update Profile",
    profile_update_success: "✅ Profile updated successfully!",
    profile_update_fail: "❌ Update failed.",
     // Admin page specific translations
    page_title_admin: "Admin Panel - Skill Swap",
    admin_title: "All Users",
    admin_search_placeholder: "Search by name, email, or skill...",
    admin_no_users: "No matching users found.",
    admin_view_profile: "View Public Profile",
    admin_update_button: "Update",
    admin_delete_button: "Delete",
    admin_update_success: "User updated successfully",
    admin_delete_confirm: "Are you sure you want to delete this user?",
    admin_unauthorized: "Unauthorized. Admins only."


  },
  ar: {
    page_title: "منصة تبادل المهارات - الرئيسية",
    logo_text: "تبادل المهارات",
    // Added translations for Navbar links
    nav_home: "الرئيسية",
    nav_search: "بحث",
    nav_login: "تسجيل الدخول",
    nav_signup: "التسجيل",
    nav_profile: "الملف الشخصي",
    nav_admin: "إدارة المستخدمين",
    nav_logout: "تسجيل الخروج",
    registered_users: "المستخدمون المسجلون",
    have_skill_q: "هل لديك مهارة؟",
    signup_link: "سجل الآن",
    hero_title: "اكتشف وشارك المهارات",
    hero_paragraph: "تواصل مع الأشخاص الذين يرغبون في التعلم والذين هم على استعداد للتعليم. انضم إلى مجتمعنا ونمِ معرفتك بمشاركة ما تعرفه وتعلم ما لا تعرفه.",
    get_started_button: "ابدأ الآن",
    how_it_works_title: "كيف تعمل المنصة",
    how_it_works_image_alt: "صورة مفاهيمية تظهر أفكاراً متشابكة تؤدي إلى فكرة واضحة مع مصباح.",
    how_it_works_image_description: "من الأفكار المعقدة إلى الحلول الواضحة: رحلة التعلم والتبادل.",
    step1_text: "1. ابحث عن المهارة التي تريد تعلمها",
    step2_text: "2. تواصل مع شخص يقدمها",
    step3_text: "3. تبادل المعرفة ونموا معاً",
    testimonials_title: "ماذا يقول مستخدمونا",
    testimonial1_text: "منصة تبادل المهارات ساعدتني على بناء الثقة في التحدث باللغة الإسبانية من خلال ربطي بمتحدثين أصليين.",
    testimonial1_user: "— أثير ح.",
    testimonial2_text: "لقد تعلمت أخيراً التصميم الجرافيكي بينما كنت أعلم الآخرين العزف على البيانو. تطابق مثالي!",
    testimonial2_user: "— بدور ق.",
    write_testimonial_title: "اكتب شهادتك",
    testimonial_name_placeholder: "اسمك",
    testimonial_message_placeholder: "ملاحظاتك...",
    testimonial_submit_button: "إرسال",
    testimonial_status_success: "✅ شكراً لملاحظاتك!",
    testimonial_status_fail: "❌ فشل الإرسال. حاول مرة أخرى.",
    footer_copyright: "© 2025 تبادل المهارات |",
    footer_about: "عن المنصة",
    footer_contact: "اتصل بنا",
    footer_support: "الدعم",
    chatbot_header_title: "المساعدة والدعم",
    chatbot_online_status: "متصل",
    chatbot_timestamp: "اليوم الساعة 9:23 صباحاً",
    chatbot_initial_message: "👋 مرحباً! أنا هنا للمساعدة. اختر خياراً أدناه:",
    chatbot_quick_reply1: "كيف أتواصل مع مستخدم؟",
    chatbot_quick_reply2: "نسيت كلمة المرور الخاصة بي.",
    chatbot_quick_reply3: "أين يمكنني تعديل ملفي الشخصي؟",
    chatbot_bot_response1: 'انقر على "اتصل عبر البريد الإلكتروني" في صفحات المستخدمين.',
    chatbot_bot_response2: 'اذهب إلى صفحة تسجيل الدخول وانقر على "نسيت كلمة المرور".',
    chatbot_bot_response3: 'يمكنك تعديل ملفك الشخصي من صفحة الملف الشخصي.',
     // Login page specific translations
    page_title_login: "تسجيل الدخول - تبادل المهارات",
    login_title: "تسجيل الدخول",
    login_email_placeholder: "البريد الإلكتروني",
    login_password_placeholder: "كلمة المرور",
    login_button: "تسجيل الدخول",
    // Signup page specific translations
    page_title_signup: "التسجيل - تبادل المهارات",
    signup_title: "التسجيل",
    signup_name_placeholder: "الاسم الكامل",
    signup_email_placeholder: "البريد الإلكتروني",
    signup_password_placeholder: "كلمة المرور",
    signup_offers_placeholder: "المهارات التي تقدمها",
    signup_wants_placeholder: "المهارات التي تريد تعلمها",
    signup_button: "إنشاء حساب",
    signup_success_message: "✅ تم إنشاء الحساب بنجاح! سيتم إعادة التوجيه...",
    signup_fail_message: "فشل التسجيل.",
     // Contact page specific translations
    page_title_contact: "اتصل بنا - تبادل المهارات",
    contact_title: "اتصل بنا",
    contact_intro: "هل لديك أسئلة أو اقتراحات أو ملاحظات؟<br>نود أن نسمع منك.",
    contact_sender_label: "بريدك الإلكتروني",
    contact_sender_placeholder: "your@email.com",
    contact_type_label: "نوع الرسالة",
    contact_type_choose: "اختر...",
    contact_type_question: "سؤال",
    contact_type_suggestion: "اقتراح",
    contact_type_feedback: "ملاحظات",
    contact_message_label: "رسالتك",
    contact_message_placeholder: "اكتب رسالتك...",
    contact_submit_button: "إرسال الرسالة",
    contact_status_success: "✅ تم إرسال الرسالة بنجاح!",
    contact_status_fail: "❌ فشل إرسال الرسالة.",
     // About page specific translations
    page_title_about: "عن المنصة - تبادل المهارات",
    about_title: "عن منصة تبادل المهارات",
    about_paragraph1: "منصة تبادل المهارات هي منصة تعاونية مصممة لمساعدة الأشخاص على مشاركة وتبادل المهارات مع بعضهم البعض.<br>سواء كنت محترفاً ترغب في تدريس خبرتك، أو متعلماً متحمساً للنمو — منصة تبادل المهارات تربطك بالأشخاص المناسبين في مجتمعك.",
    about_paragraph2: "مهمتنا هي جعل التعلم أكثر سهولة وتخصيصاً ويعتمد على المجتمع — لأن كل شخص لديه شيء ثمين ليشاركه، وشيء جديد ليتعلمه.",
    about_team_title: "قابل فريقنا",
     // Support page specific translations
    page_title_support: "الدعم - تبادل المهارات",
    support_title: "الدعم",
    support_paragraph1: "هل تحتاج إلى مساعدة في استخدام منصة تبادل المهارات؟ نحن هنا لمساعدتك في أي مشاكل أو أسئلة قد تكون لديك.",
    support_paragraph2: "📩 يمكنك التواصل مع فريق الدعم لدينا في أي وقت على:<br>",
    support_email: "support@skillswap.sa",
    support_paragraph3: "نرد عادةً خلال <strong>24 ساعة</strong>. تجربتك تهمنا.",
     // Search page specific translations
    page_title_search: "البحث - تبادل المهارات",
    search_title: "البحث عن المستخدمين",
    search_placeholder: "البحث بالاسم أو المهارة...",
    search_no_users: "لم يتم العثور على مستخدمين.",
    search_card_offers: "يقدم:",
    search_card_wants: "يرغب في تعلم:",
    search_card_view_profile: "عرض الملف الشخصي",
     // User page specific translations
    page_title_user: "الملف الشخصي للمستخدم - تبادل المهارات",
    user_loading: "جاري تحميل الملف الشخصي...",
    user_missing_id: "معرف المستخدم مفقود.",
    user_not_found: "المستخدم غير موجود.",
    user_bio_label: "السيرة الذاتية:",
    user_offers_label: "يقدم:",
    user_wants_label: "يرغب في تعلم:",
    user_contact_email_button: "اتصل عبر البريد الإلكتروني",
    user_back_to_search: "العودة إلى البحث",
    user_no_bio: "لم يتم توفير سيرة ذاتية.",
    user_no_skills_offered: "لم يتم إدراج مهارات.",
    user_no_preferences_listed: "لم يتم إدراج تفضيلات.",
     // Admin page specific translations
    page_title_admin: "لوحة الإدارة - تبادل المهارات",
    admin_title: "جميع المستخدمين",
    admin_search_placeholder: "البحث بالاسم، البريد الإلكتروني، أو المهارة...",
    admin_no_users: "لم يتم العثور على مستخدمين مطابقين.",
    admin_view_profile: "عرض الملف الشخصي العام",
    admin_update_button: "تحديث",
    admin_delete_button: "حذف",
    admin_update_success: "تم تحديث المستخدم بنجاح",
    admin_delete_confirm: "هل أنت متأكد أنك تريد حذف هذا المستخدم؟",
    admin_unauthorized: "غير مصرح لك. للمسؤولين فقط.",
    // Profile page specific translations (أضف هذا القسم إذا لم يكن موجودًا أو أضف الترجمات إليه)
    page_title_profile: "ملفي الشخصي - تبادل المهارات",
    profile_title: "ملفي الشخصي",
    profile_name_label: "الاسم:",
    profile_email_label: "البريد الإلكتروني:",
    profile_bio_placeholder: "سيرتك الذاتية...",
    profile_offers_placeholder: "المهارات التي تقدمها",
    profile_wants_placeholder: "المهارات التي ترغب في تعلمها",
    profile_new_password_placeholder: "كلمة مرور جديدة (اختياري)",
    profile_update_button: "تحديث الملف الشخصي",
    profile_update_success: "✅ تم تحديث الملف الشخصي بنجاح!", // هذا موجود بالفعل
    profile_update_fail: "❌ فشل التحديث." // هذا موجود بالفعل

  }
};

// Get the current language from localStorage or default to Arabic
let currentLang = localStorage.getItem('lang') || 'ar';
const htmlElement = document.documentElement;
const languageSelect = document.getElementById('languageSelect');
const navLinksUl = document.getElementById('navLinks'); // Get the ul element

// Function to update text content based on current language
function updateContent() {
  htmlElement.setAttribute('lang', currentLang);
  htmlElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  // Set text alignment for the body
  document.body.style.textAlign = currentLang === 'ar' ? 'right' : 'left';

  // Adjust text alignment for specific elements that might have explicit text-align in CSS
  const textAlign = currentLang === 'ar' ? 'right' : 'left';
  const textAlignOpposite = currentLang === 'ar' ? 'left' : 'right'; // For elements like user names in testimonials


  document.querySelectorAll('[data-i18n-key]').forEach(element => {
    const key = element.getAttribute('data-i18n-key');
    if (translations[currentLang] && translations[currentLang][key]) {
      // Handle placeholders separately
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
         element.placeholder = translations[currentLang][key];
      } else {
         element.innerHTML = translations[currentLang][key]; // Use innerHTML for potential line breaks
      }

    }
  });

   // Update specific elements not using data-i18n-key consistently or requiring special handling

   // Update testimonial status messages if they are visible
   const statusEl = document.getElementById("testimonialStatus");
   if (statusEl && statusEl.textContent) { // Check if element exists and has text
       // Check current text content against possible success/fail messages in both languages
       const isSuccess = statusEl.textContent.includes(translations['en']['testimonial_status_success'].substring(0,5)) || statusEl.textContent.includes(translations['ar']['testimonial_status_success'].substring(0,5));
       const isFail = statusEl.textContent.includes(translations['en']['testimonial_status_fail'].substring(0,5)) || statusEl.textContent.includes(translations['ar']['testimonial_status_fail'].substring(0,5));

       if (isSuccess) {
           statusEl.textContent = translations[currentLang]['testimonial_status_success'];
           statusEl.className = 'success-message'; // Ensure class is set
       } else if (isFail) {
            statusEl.textContent = translations[currentLang]['testimonial_status_fail'];
            statusEl.className = 'error-message'; // Ensure class is set
       }
        // For other messages, they might need data-i18n-key or specific handling
   }

   // Apply text alignment to elements based on direction if needed
   const elementsToAlign = document.querySelectorAll('.hero p, .how-it-works-visual p, .step p, .skill-card');
   elementsToAlign.forEach(el => {
       el.style.textAlign = textAlign;
   });

   const testimonialCards = document.querySelectorAll('.testimonial-card');
   testimonialCards.forEach(card => {
       card.style.textAlign = textAlign;
       const userSpan = card.querySelector('.user');
       if(userSpan) userSpan.style.textAlign = textAlignOpposite;
   });

    const formInputs = document.querySelectorAll('.form-container input, .form-container textarea, .form-container select');
    formInputs.forEach(input => {
        // Only apply to text-based inputs, not buttons or specific types if needed
        if (input.type !== 'submit' && input.tagName !== 'BUTTON') {
             input.style.textAlign = textAlign;
        }
    });

     const quickReplyButtons = document.querySelectorAll('.quick-replies button');
    quickReplyButtons.forEach(button => {
        button.style.textAlign = textAlign;
    });

    // Adjust chatbot message alignment based on direction
    const chatMessages = document.querySelectorAll('.chatbox-body .chat-message');
    chatMessages.forEach(msg => {
       // This is a simplified approach. A more robust solution would track sender.
       // Assuming the first message is bot, subsequent pairs are user/bot based on original structure
       const index = Array.from(chatMessages).indexOf(msg);
       const isUserReply = index > 0 && index % 2 !== 0; // Check if index is odd and not the first message


       if (currentLang === 'ar') {
           msg.style.textAlign = 'right';
           msg.style.alignSelf = isUserReply ? 'flex-end' : 'flex-start';
       } else { // English
           msg.style.textAlign = 'left';
           msg.style.alignSelf = isUserReply ? 'flex-end' : 'flex-start';
       }
    });


  // Set the selected value in the dropdown
  if(languageSelect) languageSelect.value = currentLang;


  // Re-run the counter animation with the correct locale if on the index page
  if (document.getElementById("userCount")) {
      animateCount("userCount", 12540, 1500, currentLang);
  }

}

// Function to handle language change from dropdown
function changeLanguage() {
  currentLang = languageSelect.value;
  localStorage.setItem('lang', currentLang); // Save preference
  updateContent(); // Update the page content
  // Reloading the page might be simpler for full UI consistency
  // window.location.reload();
}

// Attach change function to select element
if(languageSelect) languageSelect.addEventListener('change', changeLanguage);


// --- Dynamic Navbar Population Script ---
// This script will now build the navigation links and *then* add the language select dropdown.

document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem('user'));
  let navHtml = ''; // String to build the navigation HTML

  if (user) {
    // Logged-in user links
    navHtml = `
      <li><a href="index.html" data-i18n-key="nav_home">${translations[currentLang]['nav_home']}</a></li>
      <li><a href="search.html" data-i18n-key="nav_search">${translations[currentLang]['nav_search']}</a></li>
      <li><a href="profile.html" data-i18n-key="nav_profile">${translations[currentLang]['nav_profile']}</a></li>
      ${user.email === 'admin@skillswap.sa' ? `<li><a href="admin.html" data-i18n-key="nav_admin">${translations[currentLang]['nav_admin']}</a></li>` : ''}
      <li><a href="#" onclick="logout(event)" data-i18n-key="nav_logout">${translations[currentLang]['nav_logout']}</a></li>
    `;
  } else {
    // Guest user links
    navHtml = `
      <li><a href="index.html" data-i18n-key="nav_home">${translations[currentLang]['nav_home']}</a></li>
      <li><a href="search.html" data-i18n-key="nav_search">${translations[currentLang]['nav_search']}</a></li>
      <li><a href="login.html" data-i18n-key="nav_login">${translations[currentLang]['nav_login']}</a></li>
      <li><a href="signup.html" data-i18n-key="nav_signup">${translations[currentLang]['nav_signup']}</a></li>
    `;
  }

  // Get the language select list item from the HTML
  const languageSelectLi = navLinksUl ? navLinksUl.querySelector('li .language-select') : null;
  const languageSelectLiParent = languageSelectLi ? languageSelectLi.parentElement : null;


  // Clear the current content of navLinksUl (which only contains the language select li)
  if(navLinksUl) navLinksUl.innerHTML = '';

  // Add the dynamic navigation links
  if(navLinksUl) navLinksUl.innerHTML = navHtml;

  // Add the language select list item back to the end
  if(navLinksUl && languageSelectLiParent) navLinksUl.appendChild(languageSelectLiParent);


  // After adding dynamic content, update all text for the current language
  updateContent();

  // Add active class to the current page link
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("#navLinks a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

function logout(event) {
  event.preventDefault(); // Prevent default link behavior
  localStorage.removeItem('user');
  window.location.href = 'index.html';
}


// --- Chatbot Logic (Adjusted for translation) ---
// Note: The getBotResponse function now needs to return translated responses

function toggleChatbot(open) {
  const box = document.getElementById('chatbot-box');
  if(box) { // Check if chatbot box exists
      box.classList.toggle('hidden', !open);
       // Update chatbot static text when opening/closing in case language changed
       if (open) {
           updateContent(); // Re-apply translations to chatbot static parts
       }
  }
}

function sendReply(message) {
  const chat = document.getElementById('chat-content');
  if (!chat) return; // Exit if chat element not found

  const userReply = document.createElement('div');
  userReply.className = 'chat-message';
  userReply.style.background = '#d6e4ff';
  // Add user icon, ensure it works with RTL - Icon position is handled by flexbox and text-align
  userReply.textContent = '🧑‍💼 ' + message;


  // Clear quick replies after user selects one
  const quickReplies = document.querySelector('.quick-replies');
  if (quickReplies) {
     quickReplies.style.display = 'none'; // Hide quick replies
  }


  chat.appendChild(userReply);

  const botReply = document.createElement('div');
  botReply.className = 'chat-message';
  // Add typing indicator (optional)
   const typingIndicator = document.createElement('span');
   typingIndicator.textContent = '...'; // Simple typing indicator
   botReply.appendChild(typingIndicator);
   botReply.style.fontStyle = 'italic'; // Make it look like typing
   chat.appendChild(botReply);
   chat.scrollTop = chat.scrollHeight;


  setTimeout(() => {
     // Remove typing indicator
     if(botReply.contains(typingIndicator)) { // Check if indicator is still there
         botReply.removeChild(typingIndicator);
     }
     botReply.style.fontStyle = 'normal'; // Reset style

     // Get the appropriate bot response based on the user's message (in the current language)
     botReply.textContent = getBotResponse(message, currentLang);

     // Apply text alignment to the new message
     if (currentLang === 'ar') {
         botReply.style.textAlign = 'right';
         botReply.style.alignSelf = 'flex-start'; // Bot message aligns left in RTL
     } else { // English
         botReply.style.textAlign = 'left';
         botReply.style.alignSelf = 'flex-start'; // Bot message aligns left in LTR
     }


     chat.scrollTop = chat.scrollHeight;

     // Re-show quick replies or offer more options after bot response (optional)
     if (quickReplies) {
         quickReplies.style.display = 'flex'; // Show quick replies again
     }


  }, 1000); // Simulate typing delay
}

// Modified getBotResponse to handle language
function getBotResponse(msg, lang) {
  // Normalize message for comparison (lowercase and remove leading/trailing spaces)
  const normalizedMsg = msg.toLowerCase().trim();

  if (lang === 'ar') {
    if (normalizedMsg.includes('تواصل مع مستخدم')) return translations['ar']['chatbot_bot_response1'];
    if (normalizedMsg.includes('نسيت كلمة المرور')) return translations['ar']['chatbot_bot_response2'];
    if (normalizedMsg.includes('تعديل ملفي الشخصي')) return translations['ar']['chatbot_bot_response3'];
    return "أنا هنا للمساعدة!"; // Default Arabic response
  } else { // English
    if (normalizedMsg.includes('contact')) return translations['en']['chatbot_bot_response1'];
    if (normalizedMsg.includes('password')) return translations['en']['chatbot_bot_response2'];
    if (normalizedMsg.includes('edit')) return translations['en']['chatbot_bot_response3'];
    return "I'm here to help!"; // Default English response
  }
}

// --- Page Specific Scripts ---

// Index Page Script (Handles user count animation and testimonial form)
if (document.getElementById('userCount')) {
    // User count animation is now triggered within updateContent to handle language locale
    // Initial call is handled by DOMContentLoaded -> updateContent
}

if (document.getElementById('testimonialForm')) {
    document.getElementById('testimonialForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        const statusEl = document.getElementById('testimonialStatus');
        const nameInput = document.getElementById('testimonialName');
        const messageInput = document.getElementById('testimonialMessage');

        const body = {
            name: nameInput.value,
            message: messageInput.value
        };

        // Basic validation
        if (!body.name || !body.message) {
             statusEl.textContent = currentLang === 'ar' ? "الرجاء ملء جميع الحقول." : "Please fill in all fields.";
             statusEl.className = 'error-message';
             return;
        }


        // Simulate sending data (replace with actual API call if backend exists)
        console.log('Submitting Testimonial:', body);

        // Simulate success/failure
        const success = Math.random() > 0.2; // 80% chance of success

        if (success) {
            statusEl.textContent = translations[currentLang]['testimonial_status_success'];
            statusEl.className = 'success-message';
            // Clear form
            nameInput.value = '';
            messageInput.value = '';
        } else {
            statusEl.textContent = translations[currentLang]['testimonial_status_fail'];
            statusEl.className = 'error-message';
        }

        // Example of actual fetch call (uncomment and modify if needed)
        /*
        const res = await fetch('/api/testimonials', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });

        const data = await res.json();


        if (data.success) {
          statusEl.textContent = translations[currentLang]['testimonial_status_success'];
          statusEl.className = 'success-message';
           // Clear form
          nameInput.value = '';
          messageInput.value = '';
        } else {
          statusEl.textContent = translations[currentLang]['testimonial_status_fail'];
           statusEl.className = 'error-message';
        }
        */
    });
}

// Login Page Script
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');


      const body = {
        email: emailInput.value,
        password: passwordInput.value
      };

       // Basic validation
        if (!body.email || !body.password) {
             const msgEl = document.createElement('p');
             msgEl.textContent = currentLang === 'ar' ? "الرجاء إدخال البريد الإلكتروني وكلمة المرور." : "Please enter email and password.";
             msgEl.className = 'error-message';
              // Remove previous message if any
            const existingMsg = document.querySelector('#loginForm .error-message');
            if(existingMsg) existingMsg.remove();

             e.target.appendChild(msgEl);
             return;
        }


       // Simulate login (replace with actual API call)
       console.log('Attempting login with:', body);

        // Simulate API response
       const fakeUsers = [
           { _id: 'user123', name: 'Test User', email: 'test@example.com' },
           { _id: 'admin456', name: 'Admin User', email: 'admin@skillswap.sa' }
       ];

       const foundUser = fakeUsers.find(u => u.email === body.email && body.password === 'password123'); // Assuming a dummy password

       if (foundUser) {
           localStorage.setItem('user', JSON.stringify(foundUser));
           window.location.href = foundUser.email === 'admin@skillswap.sa' ? 'admin.html' : 'profile.html';
       } else {
            const msgEl = document.createElement('p');
            msgEl.textContent = currentLang === 'ar' ? "فشل تسجيل الدخول. تحقق من بريدك الإلكتروني وكلمة المرور." : "Login failed. Check your email and password.";
            msgEl.className = 'error-message';

             // Remove previous message if any
            const existingMsg = document.querySelector('#loginForm .error-message');
            if(existingMsg) existingMsg.remove();

            e.target.appendChild(msgEl);
       }


      // Example of actual fetch call (uncomment and modify if needed)
      /*
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();

      const msgEl = document.createElement('p');
      msgEl.className = data.success ? 'success-message' : 'error-message';
      msgEl.textContent = data.success
        ? (currentLang === 'ar' ? "تم تسجيل الدخول بنجاح! سيتم إعادة التوجيه..." : "Login successful! Redirecting...")
        : (currentLang === 'ar' ? "فشل تسجيل الدخول." : "Login failed.");


       // Remove previous message if any
      const existingMsg = document.querySelector('#loginForm .success-message, #loginForm .error-message');
      if(existingMsg) existingMsg.remove();

      e.target.appendChild(msgEl);


      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        // Redirect based on user type if needed, or to profile
        window.location.href = "profile.html";
      }
      */
    });
}

// Signup Page Script
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const offersInput = document.getElementById('offers');
      const wantsInput = document.getElementById('wants');
      const signupMessageEl = document.getElementById('signupMessage');


      const body = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        offers: offersInput.value,
        wants: wantsInput.value
      };

      // Basic validation
       if (!body.name || !body.email || !body.password || !body.offers) {
            signupMessageEl.className = 'error-message';
            signupMessageEl.textContent = currentLang === 'ar' ? "الرجاء ملء الحقول المطلوبة (الاسم، البريد الإلكتروني، كلمة المرور، المهارات المقدمة)." : "Please fill in required fields (Name, Email, Password, Skills Offered).";
            return;
       }


      // Simulate signup (replace with actual API call)
      console.log('Attempting signup with:', body);

      // Simulate API response
       const success = Math.random() > 0.1; // 90% chance of success
       const fakeUser = { _id: 'newuser' + Date.now(), name: body.name, email: body.email };

       if (success) {
            signupMessageEl.className = 'success-message';
            signupMessageEl.textContent = translations[currentLang]['signup_success_message'];

            localStorage.setItem('user', JSON.stringify(fakeUser));

            setTimeout(() => {
                 window.location.href = "profile.html";
            }, 1500); // Redirect after 1.5 seconds

       } else {
            signupMessageEl.className = 'error-message';
            signupMessageEl.textContent = translations[currentLang]['signup_fail_message'];
       }


      // Example of actual fetch call (uncomment and modify if needed)
      /*
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      const signupMessageEl = document.getElementById('signupMessage');
      if (data.success) {
        signupMessageEl.className = 'success-message';
        signupMessageEl.textContent = translations[currentLang]['signup_success_message'];

        localStorage.setItem('user', JSON.stringify(data.user));
        setTimeout(() => {
             window.location.href = "profile.html";
        }, 1500); // Redirect after 1.5 seconds

      } else {
        signupMessageEl.className = 'error-message';
        signupMessageEl.textContent = data.error || translations[currentLang]['signup_fail_message']; // Use error message from backend if available
      }
      */
    });
}

// Contact Page Script
if (document.getElementById('contactForm')) {
     document.getElementById('contactForm').addEventListener('submit', async function (e) {
      e.preventDefault();
      const senderInput = document.getElementById('sender');
      const typeSelect = document.getElementById('type');
      const messageTextarea = document.getElementById('message');
      const contactStatusEl = document.getElementById('contactStatus');


      const body = {
        sender: senderInput.value,
        type: typeSelect.value,
        message: messageTextarea.value
      };

       // Basic validation
       if (!body.sender || !body.type || !body.message) {
            contactStatusEl.textContent = currentLang === 'ar' ? "الرجاء ملء جميع الحقول." : "Please fill in all fields.";
            contactStatusEl.className = 'error-message';
            return;
       }

      // Simulate sending data (replace with actual API call)
       console.log('Sending Contact Message:', body);

       // Simulate API response
       const success = Math.random() > 0.1; // 90% chance of success


       if (success) {
            contactStatusEl.textContent = translations[currentLang]['contact_status_success'];
            contactStatusEl.className = 'success-message';
            // Clear form
            senderInput.value = '';
            typeSelect.value = '';
            messageTextarea.value = '';
       } else {
            contactStatusEl.textContent = translations[currentLang]['contact_status_fail'];
            contactStatusEl.className = 'error-message';
       }

      // Example of actual fetch call (uncomment and modify if needed)
      /*
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      const status = document.getElementById('contactStatus');

      if (data.success) {
        status.textContent = translations[currentLang]['contact_status_success'];
        status.className = 'success-message';
        document.getElementById('contactForm').reset();
      } else {
        status.textContent = translations[currentLang]['contact_status_fail'];
        status.className = 'error-message';
      }
      */
    });
}

// Profile Page Script
if (document.getElementById('profileForm')) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      window.location.href = 'login.html';
    } else {
        const nameEl = document.getElementById('name');
        const emailEl = document.getElementById('email');
        const bioTextarea = document.getElementById('bio');
        const offersInput = document.getElementById('offers');
        const wantsInput = document.getElementById('wants');
        const newPasswordInput = document.getElementById('newPassword'); // Added new password input
        const messageEl = document.getElementById('message');


        if (nameEl) nameEl.textContent = user.name;
        if (emailEl) emailEl.textContent = user.email;


        // Fetch user data to pre-fill form
        fetch(`/api/users/${user._id}`)
          .then(res => res.json())
          .then(data => {
            if (data.success && data.user) {
              const u = data.user;
              if(bioTextarea) bioTextarea.value = u.bio || '';
              if(offersInput) offersInput.value = u.offers || '';
              if(wantsInput) wantsInput.value = u.wants || '';
            }
          });

        document.getElementById('profileForm').addEventListener('submit', async function(e) {
          e.preventDefault();

          const updatedData = {
            bio: bioTextarea ? bioTextarea.value : undefined,
            offers: offersInput ? offersInput.value : undefined,
            wants: wantsInput ? wantsInput.value : undefined
          };

           // Add password to update data if entered
           if (newPasswordInput && newPasswordInput.value) {
               updatedData.password = newPasswordInput.value;
           }


          // Simulate update (replace with actual API call)
           console.log('Updating profile for user:', user._id, updatedData);

            // Simulate API response
           const success = Math.random() > 0.1; // 90% chance of success

           if (success) {
                messageEl.textContent = translations[currentLang]['profile_update_success'];
                messageEl.className = 'success-message';
                // Optionally update local storage if user data is returned from API
                 // localStorage.setItem('user', JSON.stringify(updatedUser));
           } else {
                messageEl.textContent = translations[currentLang]['profile_update_fail'];
                 messageEl.className = 'error-message';
           }


          // Example of actual fetch call (uncomment and modify if needed)
          /*
          const res = await fetch(`/api/users/${user._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
          });
          const data = await res.json();
          const messageEl = document.getElementById('message');
          messageEl.textContent = data.success
            ? translations[currentLang]['profile_update_success']
            : translations[currentLang]['profile_update_fail'];

          messageEl.className = data.success ? 'success-message' : 'error-message';

           // Optionally update local storage if user data is returned from API and needed elsewhere
          // if (data.success && data.user) {
          //      localStorage.setItem('user', JSON.stringify(data.user));
          // }
          */
        });
    }
}

// Search Page Script
if (document.getElementById('searchBox') && document.getElementById('results')) {
    let allUsers = [];
    const searchBox = document.getElementById("searchBox");
    const resultsContainer = document.getElementById("results");


    function renderResults(list) {
      resultsContainer.innerHTML = "";

      if (!list || list.length === 0) {
        resultsContainer.innerHTML = `<p style='text-align:center;'>${translations[currentLang]['search_no_users']}</p>`;
        return;
      }

      list.forEach((u) => {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.innerHTML = `
          <h3>${u.name}</h3>
          <p><strong>${translations[currentLang]['search_card_offers']}</strong> ${u.offers || (currentLang === 'ar' ? "لا يوجد" : "None")}</p>
          <p><strong>${translations[currentLang]['search_card_wants']}</strong> ${u.wants || (currentLang === 'ar' ? "لا يوجد" : "None")}</p>
          <a href="user.html?id=${u._id}">${translations[currentLang]['search_card_view_profile']}</a>
        `;
        resultsContainer.appendChild(card);
      });
    }

    // Load all users
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        allUsers = data.users ? data.users.filter(u => u.email !== 'admin@skillswap.sa') : []; // hide admin, handle potential missing users array
        renderResults(allUsers);
        // Update placeholder after loading users and setting initial language
        searchBox.placeholder = translations[currentLang]['search_placeholder'];
      })
       .catch(error => {
           console.error('Error loading users:', error);
            resultsContainer.innerHTML = `<p style='text-align:center; color: red;'>${currentLang === 'ar' ? "فشل تحميل المستخدمين." : "Failed to load users."}</p>`;
       });


    // Search
    searchBox.addEventListener("input", function () {
      const q = this.value.toLowerCase();
      const filtered = allUsers.filter((u) =>
        u.name.toLowerCase().includes(q) ||
        (u.offers || "").toLowerCase().includes(q) ||
        (u.wants || "").toLowerCase().includes(q)
      );
      renderResults(filtered);
    });

    // Update placeholder and results text on language change
    languageSelect.addEventListener('change', () => {
        searchBox.placeholder = translations[currentLang]['search_placeholder'];
        // Re-render results to update "Offers", "Wants", and "View Profile" text
        renderResults(allUsers.filter((u) => // Filter again based on current search query if any
            u.name.toLowerCase().includes(searchBox.value.toLowerCase()) ||
            (u.offers || "").toLowerCase().includes(searchBox.value.toLowerCase()) ||
            (u.wants || "").toLowerCase().includes(searchBox.value.toLowerCase())
        ));
    });

}

// User Page Script
if (document.getElementById('userProfile')) {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');
    const userProfileContainer = document.getElementById("userProfile");


    if (!userId) {
      userProfileContainer.innerHTML = `<p>${translations[currentLang]['user_missing_id']}</p>`;
    } else {
        // Initial loading message
        userProfileContainer.innerHTML = `<p>${translations[currentLang]['user_loading']}</p>`;

      fetch(`/api/users/${userId}`)
        .then(res => {
          if (!res.ok) {
            // Handle 404 or other errors
             userProfileContainer.innerHTML = `<p>${translations[currentLang]['user_not_found']}</p>`;
             throw new Error("User not found or API error"); // Stop processing
          }
          return res.json();
        })
        .then(user => {
          if (user && user.name) { // Basic check if user data is valid
               userProfileContainer.innerHTML = `
                <h2>${user.name}</h2>
                <p><i class="fas fa-user"></i> <strong>${translations[currentLang]['user_bio_label']}</strong> ${user.bio || translations[currentLang]['user_no_bio']}</p>
                <p><i class="fas fa-hands-helping"></i> <strong>${translations[currentLang]['user_offers_label']}</strong> ${user.offers || translations[currentLang]['user_no_skills_offered']}</p>
                <p><i class="fas fa-book-reader"></i> <strong>${translations[currentLang]['user_wants_label']}</strong> ${user.wants || translations[currentLang]['user_no_preferences_listed']}</p>
                <a class="btn-email" href="mailto:${user.email}"><i class="fas fa-envelope"></i> ${translations[currentLang]['user_contact_email_button']}</a>
                <br><br>
                <a href="search.html" class="btn-email" style="background: #ccc;"><i class="fas fa-arrow-left"></i> ${translations[currentLang]['user_back_to_search']}</a>
              `;
          } else {
               userProfileContainer.innerHTML = `<p>${translations[currentLang]['user_not_found']}</p>`;
          }

        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
          // Error message already set by the .then block's error handling for res.ok
           if (!userProfileContainer.innerHTML || userProfileContainer.innerHTML.includes(translations['currentLang']['user_loading'])) {
                userProfileContainer.innerHTML = `<p style='color: red;'>${currentLang === 'ar' ? "حدث خطأ أثناء تحميل الملف الشخصي." : "An error occurred while loading the profile."}</p>`;
           }
        });

         // Update user profile text on language change (if profile is already loaded)
        languageSelect.addEventListener('change', () => {
            // Re-fetch or re-render if profile data is stored
            // For simplicity here, we'll just re-fetch the static translations if the profile exists
            const userNameEl = userProfileContainer.querySelector('h2');
            if (userNameEl) { // Check if profile is loaded
                 const userBioEl = userProfileContainer.querySelector('p i.fa-user').parentElement;
                 const userOffersEl = userProfileContainer.querySelector('p i.fa-hands-helping').parentElement;
                 const userWantsEl = userProfileContainer.querySelector('p i.fa-book-reader').parentElement;
                 const contactButton = userProfileContainer.querySelector('.btn-email');
                 const backButton = userProfileContainer.querySelector('a[href="search.html"]');


                 userBioEl.innerHTML = `<i class="fas fa-user"></i> <strong>${translations[currentLang]['user_bio_label']}</strong> ${userBioEl.innerHTML.split('</strong>')[1].trim()}`; // Preserve bio text
                 userOffersEl.innerHTML = `<i class="fas fa-hands-helping"></i> <strong>${translations[currentLang]['user_offers_label']}</strong> ${userOffersEl.innerHTML.split('</strong>')[1].trim()}`; // Preserve offers text
                 userWantsEl.innerHTML = `<i class="fas fa-book-reader"></i> <strong>${translations[currentLang]['user_wants_label']}</strong> ${userWantsEl.innerHTML.split('</strong>')[1].trim()}`; // Preserve wants text
                 contactButton.innerHTML = `<i class="fas fa-envelope"></i> ${translations[currentLang]['user_contact_email_button']}`;
                 backButton.innerHTML = `<i class="fas fa-arrow-left"></i> ${translations[currentLang]['user_back_to_search']}`;
            }
             // Update loading/error messages if they are currently displayed
            if (userProfileContainer.textContent === translations[currentLang === 'ar' ? 'en' : 'ar']['user_loading']) {
                 userProfileContainer.textContent = translations[currentLang]['user_loading'];
            } else if (userProfileContainer.textContent.includes(translations[currentLang === 'ar' ? 'en' : 'ar']['user_missing_id'])) {
                 userProfileContainer.textContent = translations[currentLang]['user_missing_id'];
            } else if (userProfileContainer.textContent.includes(translations[currentLang === 'ar' ? 'en' : 'ar']['user_not_found'])) {
                 userProfileContainer.textContent = translations[currentLang]['user_not_found'];
            }
        });
    }
}

// Admin Page Script
if (document.getElementById('usersTable') && document.getElementById('searchBox')) {
    const user = JSON.parse(localStorage.getItem('user'));
    const usersTableContainer = document.getElementById('usersTable');
    const searchBox = document.getElementById('searchBox');


    // Admin authorization check
    if (!user || user.email !== 'admin@skillswap.sa') {
      alert(translations[currentLang]['admin_unauthorized']);
      window.location.href = 'index.html';
    } else {
        let allUsers = [];

        function renderUsers(list) {
          usersTableContainer.innerHTML = '';
          if (!list || list.length === 0) {
            usersTableContainer.innerHTML = `<p>${translations[currentLang]['admin_no_users']}</p>`;
            return;
          }

          list.forEach(u => {
            const card = document.createElement('div');
            card.className = 'skill-card admin-card'; // Using skill-card class for styling, adding admin-card
            card.innerHTML = `
              <label for="name-${u._id}">${currentLang === 'ar' ? "الاسم:" : "Name:"}</label>
              <input type="text" value="${u.name || ''}" id="name-${u._id}">

              <label for="email-${u._id}">${currentLang === 'ar' ? "البريد الإلكتروني:" : "Email:"}</label>
              <input type="email" value="${u.email || ''}" id="email-${u._id}">

              <label for="bio-${u._id}">${currentLang === 'ar' ? "السيرة الذاتية:" : "Bio:"}</label>
              <textarea id="bio-${u._id}" placeholder="${currentLang === 'ar' ? "السيرة الذاتية" : "Bio"}">${u.bio || ''}</textarea>

              <label for="offers-${u._id}">${currentLang === 'ar' ? "يقدم:" : "Offers:"}</label>
              <input type="text" value="${u.offers || ''}" id="offers-${u._id}" placeholder="${currentLang === 'ar' ? "المهارات المقدمة" : "Offers"}">

              <label for="wants-${u._id}">${currentLang === 'ar' ? "يرغب في تعلم:" : "Wants to Learn:"}</label>
              <input type="text" value="${u.wants || ''}" id="wants-${u._id}" placeholder="${currentLang === 'ar' ? "المهارات المطلوبة" : "Wants"}">

              <a href="user.html?id=${u._id}" target="_blank">${translations[currentLang]['admin_view_profile']}</a><br><br>
              <button onclick="updateUser('${u._id}')">${translations[currentLang]['admin_update_button']}</button>
              <button onclick="deleteUser('${u._id}')">${translations[currentLang]['admin_delete_button']}</button>
            `;
            usersTableContainer.appendChild(card);
          });
        }

        // Function to update a user (client-side simulation or actual API call)
        window.updateUser = function(id) {
           const name = document.getElementById(`name-${id}`).value;
           const email = document.getElementById(`email-${id}`).value;
           const bio = document.getElementById(`bio-${id}`).value;
           const offers = document.getElementById(`offers-${id}`).value;
           const wants = document.getElementById(`wants-${id}`).value;

           // Simulate update
           console.log('Updating user', id, { name, email, bio, offers, wants });
            alert(translations[currentLang]['admin_update_success']); // Simulate success message


           // Example of actual fetch call (uncomment and modify if needed)
          /*
           fetch(`/api/users/${id}/admin-update`, {
             method: 'PUT',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify({ name, email, bio, offers, wants })
           }).then(res => res.json())
             .then(data => {
                 if(data.success) {
                     alert(translations[currentLang]['admin_update_success']);
                     // Optionally update the local allUsers array or re-fetch
                 } else {
                      alert(data.error || (currentLang === 'ar' ? "فشل تحديث المستخدم." : "Failed to update user."));
                 }
             })
             .catch(error => {
                 console.error('Error updating user:', error);
                 alert(currentLang === 'ar' ? "حدث خطأ أثناء التحديث." : "An error occurred during update.");
             });
           */
         }


         // Function to delete a user (client-side simulation or actual API call)
        window.deleteUser = function(id) {
          if (confirm(translations[currentLang]['admin_delete_confirm'])) {
            // Simulate deletion
            console.log('Deleting user', id);
            // Remove user from the allUsers array and re-render
            allUsers = allUsers.filter(u => u._id !== id);
            renderUsers(allUsers);
             // alert(currentLang === 'ar' ? "تم حذف المستخدم بنجاح." : "User deleted successfully."); // Optional success message


             // Example of actual fetch call (uncomment and modify if needed)
            /*
             fetch(`/api/users/${id}`, { method: 'DELETE' })
               .then(res => res.json())
               .then(data => {
                   if(data.success) {
                       location.reload(); // Reload to show updated list
                   } else {
                        alert(data.error || (currentLang === 'ar' ? "فشل حذف المستخدم." : "Failed to delete user."));
                   }
               })
               .catch(error => {
                   console.error('Error deleting user:', error);
                    alert(currentLang === 'ar' ? "حدث خطأ أثناء الحذف." : "An error occurred during deletion.");
               });
             */
          }
        }


        // Load all users once
        fetch('/api/users')
          .then(res => res.json())
          .then(data => {
            console.log("✅ Loaded Users:", data.users); // تأكيد
            allUsers = data.users || []; // Handle potential missing users array
            renderUsers(allUsers);
             // Update search placeholder after loading users and setting initial language
            searchBox.placeholder = translations[currentLang]['admin_search_placeholder'];
          })
           .catch(error => {
               console.error('Error loading users:', error);
               usersTableContainer.innerHTML = `<p style='color: red;'>${currentLang === 'ar' ? "فشل تحميل المستخدمين." : "Failed to load users."}</p>`;
           });


        // Filter as user types
        searchBox.addEventListener('input', function () {
          const q = this.value.toLowerCase();
          console.log("🔎 Search Query:", q);
          const filtered = allUsers.filter(u =>
            (u.name?.toLowerCase().includes(q) || '') || // Added checks for null/undefined
            (u.email?.toLowerCase().includes(q) || '') ||
            (u.offers?.toLowerCase().includes(q) || '') ||
            (u.wants?.toLowerCase().includes(q) || '')
          );
          console.log("📋 Filtered Results:", filtered);
          renderUsers(filtered);
        });

         // Update search placeholder and rendered user details on language change
         languageSelect.addEventListener('change', () => {
             searchBox.placeholder = translations[currentLang]['admin_search_placeholder'];
             // Re-render users to update labels and placeholders inside cards
             renderUsers(allUsers.filter(u => // Filter again based on current search query if any
                (u.name?.toLowerCase().includes(searchBox.value.toLowerCase()) || '') ||
                (u.email?.toLowerCase().includes(searchBox.value.toLowerCase()) || '') ||
                (u.offers?.toLowerCase().includes(searchBox.value.toLowerCase()) || '') ||
                (u.wants?.toLowerCase().includes(searchBox.value.toLowerCase()) || '')
            ));
         });

    }
}
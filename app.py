import streamlit as st
import streamlit.components.v1 as components

# --- PAGE CONFIG ---
st.set_page_config(page_title="Dr. Swati | AI Engineer", page_icon="🤖", layout="wide")

# --- 🎨 CUSTOM CSS (The "Frontend" Proof) ---
# This proves you can style components beyond the default Streamlit look.
st.markdown("""
    <style>
    /* Custom Skill Bar Styling */
    .skill-container {
        width: 100%;
        background-color: #f1f1f1;
        border-radius: 10px;
        margin-bottom: 15px;
    }
    .skill-fill {
        height: 10px;
        border-radius: 10px;
        background: linear-gradient(90deg, #1E3A8A 0%, #3B82F6 100%);
        text-align: right;
        padding-right: 10px;
        color: white;
        font-size: 12px;
    }
    .main-title { font-size: 45px; font-weight: bold; color: #1E3A8A; font-family: 'Helvetica', sans-serif; }
    </style>
    """, unsafe_allow_html=True)

# --- 📜 JAVASCRIPT INJECTION (The "Logic" Proof) ---
# This adds a dynamic greeting based on the user's local time.
with st.sidebar:
    st.image("https://via.placeholder.com/150", caption="Dr. Swati")
    
    # Prove JS capability: Dynamic Greeting
    components.html("""
        <div id="greeting" style="color: #1E3A8A; font-weight: bold; font-family: sans-serif;"></div>
        <script>
            const hour = new Date().getHours();
            let welcome;
            if (hour < 12) welcome = "Good Morning! ☀️";
            else if (hour < 18) welcome = "Good Afternoon! ☕";
            else welcome = "Good Evening! 🌙";
            document.getElementById("greeting").innerHTML = welcome;
        </script>
    """, height=30)
    
    st.markdown("### Contact Info")
    st.write("📍 Oulu, Finland")
    # ... rest of your sidebar ...

# --- TABS ---
tab1, tab2, tab3, tab4, tab5 = st.tabs(["📄 Experience", "🛠️ Skills", "📚 Publications", "🤖 Booking Bot", "📊 Sentiment Lab"])

with tab2:
    st.header("Technical Expertise (Custom Styled)")
    
    # Proving HTML/CSS Capability
    st.markdown("### AI & Machine Learning")
    
    # Custom HTML Skill Bars
    def skill_bar(name, level):
        return f"""
        <p style="margin-bottom:2px;">{name}</p>
        <div class="skill-container">
            <div class="skill-fill" style="width: {level}%;"></div>
        </div>
        """

    col1, col2 = st.columns(2)
    with col1:
        st.markdown(skill_bar("LLMs & Prompt Engineering", 95), unsafe_allow_html=True)
        st.markdown(skill_bar("Computer Vision (YOLO/SAM)", 90), unsafe_allow_html=True)
    with col2:
        st.markdown(skill_bar("Python (Advanced)", 98), unsafe_allow_html=True)
        st.markdown(skill_bar("GCP & MLOps", 85), unsafe_allow_html=True)

with tab3:
    st.header("Research & Publications")
    st.write("🎓 **Ph.D. Thesis:** Role of Isospin in Heavy and Neutron-Rich Nuclei (IIT Roorkee)")
    st.write("- Published 10+ research papers in international journals.")
    st.write("- **Key Achievement:** Created Nuclear Isomer Database (2,750 entries).")
    st.markdown("[View Google Scholar Profile](https://scholar.google.com)")

with tab4:
    st.header("🤖 Interactive Booking Bot")
    st.info("This is a demo of a database-connected booking engine. Try it out below!")
    st.write("(Coming Soon: Database Connection & CRUD Logic)")

with tab5:
    st.header("📊 Sentiment Lab")
    st.info("Visualizing real-time sentiment analysis from hotel reviews.")
    st.write("(Coming Soon: Real-time Dashboard)")

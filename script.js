/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* BASE */
body {
    font-family: 'Inter', 'Segoe UI', sans-serif;
    background-color: #F8FAFC;
    color: #1F2937;
}

#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* HEADER */
.header {
    background: #FFFFFF;
    border-bottom: 1px solid #E5E7EB;
    padding: 20px 32px;
}

.logo {
    font-size: 28px;
    font-weight: 700;
    color: #C1121F;
}

.subtitle {
    font-size: 14px;
    color: #64748B;
}

/* MAIN */
.main {
    flex: 1;
    padding: 32px;
}

/* SOS SECTION */
.sos-section {
    text-align: center;
    margin-bottom: 40px;
}

#sosBtn {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: #C1121F;
    color: white;
    font-size: 40px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    box-shadow: 0 15px 40px rgba(193, 18, 31, 0.35);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

#sosBtn:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 50px rgba(193, 18, 31, 0.45);
}

#status {
    margin-top: 14px;
    font-size: 14px;
    color: #64748B;
}

/* GRID */
.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}

/* CARD */
.card {
    background: #FFFFFF;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.card h3 {
    margin-bottom: 10px;
    font-size: 16px;
}

.card p {
    font-size: 14px;
    color: #475569;
}

.card a {
    display: inline-block;
    margin-top: 8px;
    font-size: 14px;
    color: #2563EB;
    text-decoration: none;
}

/* INPUTS & BUTTONS */
input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 8px;
    border: 1px solid #CBD5E1;
}

.secondary-btn {
    margin-top: 10px;
    padding: 10px;
    background: #1F2937;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
}

.secondary-btn.full {
    width: 100%;
}

ul {
    margin-top: 10px;
    padding-left: 18px;
    font-size: 14px;
    color: #475569;
}

/* VISIBILITY */
.desktop-only {
    display: block;
}

.mobile-only {
    display: none;
}

/* MOBILE VIEW */
@media (max-width: 768px) {
    .main {
        padding: 20px;
    }

    #sosBtn {
        width: 220px;
        height: 220px;
        font-size: 44px;
    }

    .desktop-only {
        display: none;
    }

    .mobile-only {
        display: block;
        margin-top: 20px;
    }
}
/* MOBILE CONTACT PANEL */
.mobile-panel {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    border-radius: 20px 20px 0 0;
    padding: 20px;
    box-shadow: 0 -10px 30px rgba(0,0,0,0.2);
    transition: bottom 0.3s ease;
    z-index: 999;
}

.mobile-panel.show {
    bottom: 0;
}

.close-btn {
    margin-top: 15px;
    width: 100%;
    padding: 10px;
    background: #CBD5E1;
    border: none;
    border-radius: 8px;
}
/* FAKE CALL UI */
.fake-call {
    position: fixed;
    inset: 0;
    background: linear-gradient(to bottom, #0F172A, #020617);
    color: white;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 30px;
    z-index: 9999;
}

.fake-call.show {
    display: flex;
}

.caller-info {
    text-align: center;
}

.caller-info img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 20px;
}

.caller-info h2 {
    font-size: 28px;
    font-weight: 600;
}

.caller-info p {
    font-size: 16px;
    opacity: 0.8;
}

.call-actions {
    display: flex;
    justify-content: space-between;
}

.call-actions button {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: none;
    font-size: 16px;
    color: white;
}

.reject {
    background: #DC2626;
}

.accept {
    background: #16A34A;
}

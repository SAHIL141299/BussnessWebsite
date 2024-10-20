import React from "react";
import Header from "../components/Head";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <section class="sub-heading light-bg">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a title="Home" href="https://www.expertappdevs.com">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-7">
              <h1>Contact Us</h1>
              <div class="title-text">
                <p>
                  {" "}
                  Are you in search of a reliable mobile app development company
                  to launch your app development tasks? Contact us for a
                  seamless experience. We can help transform your business to
                  perfection at an affordable price. Hire developers in USA, UK,
                  Canada, Australia, Middle East, and Europe from India.
                </p>
              </div>
            </div>
            <div class="col-lg-5 pr-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7343.755028957402!2d72.5229956505152!3d23.028269103197882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bc260998fa3%3A0xd9842e773c26a16b!2sExpert%20App%20Devs!5e0!3m2!1sen!2sin!4v1637141491530!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section class="section-space">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 order-lg-0 order-2">
              <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.2/js/toastr.min.js"></script>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 order-lg-0 order-2">
              <form
                method="POST"
                enctype="multipart/form-data"
                action="https://www.expertappdevs.com/contact-us/store"
                id="contactForm"
                novalidate="novalidate"
              >
                <input
                  type="hidden"
                  name="_token"
                  value="qctYIqtQnZOc8EEssZAxHUPuZ6IKrvxeTNNT7OAe"
                />
                <div
                  id="honeypot_for_bots_Y5b5MrafdOAhNOyt_wrap"
                  style={{ display: "none" }}
                >
                  <input
                    name="honeypot_for_bots_Y5b5MrafdOAhNOyt"
                    type="text"
                    value=""
                    id="honeypot_for_bots_Y5b5MrafdOAhNOyt"
                  />
                  <input
                    name="valid_from"
                    type="text"
                    value="eyJpdiI6Imt4UEorczZOS2ZNMk9CWUwzdUs3MUE9PSIsInZhbHVlIjoiL0dZK2tyRGhjSEw2UkwvYlYyYlVVQT09IiwibWFjIjoiMzNjMDNmYmYyMjVkMDhiZDBkYjljODcyOTQ0ODNmNDExYTBjYWQyZDRlZTk0ZTkwMTA3ODM0M2M3YzcwNzVhOCIsInRhZyI6IiJ9"
                  />
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-label-group">
                      <label>
                        Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                        name="name"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-label-group">
                      <label>
                        Email address <span>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your email address"
                        name="email"
                        value=""
                      />
                      <div
                        id="email_error_div"
                        style={{
                          color: "red",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontFamily: "'Circular Std'",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-label-group">
                      <label>Company name </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your company name"
                        name="company_name"
                        id="company_name"
                        value=""
                      />
                      <div
                        id="company_name_error_div"
                        style={{
                          color: "red",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontFamily: "'Circular Std'",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-label-group">
                      <label>Website</label>
                      <input
                        type="url"
                        class="form-control"
                        placeholder="Enter website address"
                        name="website"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-label-group">
                      <label>Skype ID</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your skype ID"
                        name="skype_id"
                        value=""
                      />
                      <div
                        id="skype_id_error_div"
                        style={{
                          color: "red",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontFamily: "'Circular Std'",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-label-group">
                      <label>
                        Country <span>*</span>
                      </label>
                      <select
                        class="form-control"
                        id="kt_select2_5_country"
                        name="country"
                      >
                        <option value="">Select your country</option>
                        <option
                          data-id="3"
                          data-country_code="+93"
                          value="Afghanistan"
                        >
                          Afghanistan
                        </option>
                        <option
                          data-id="1"
                          data-country_code="+355"
                          value="Albania"
                        >
                          Albania
                        </option>
                        <option
                          data-id="2"
                          data-country_code="+1"
                          value="America"
                        >
                          America
                        </option>
                        <option
                          data-id="4"
                          data-country_code="+54"
                          value="Argentina"
                        >
                          Argentina
                        </option>
                        <option
                          data-id="5"
                          data-country_code="+297"
                          value="Aruba"
                        >
                          Aruba
                        </option>
                        <option
                          data-id="6"
                          data-country_code="+61"
                          value="Australia"
                        >
                          Australia
                        </option>
                        <option
                          data-id="7"
                          data-country_code="+994"
                          value="Azerbaijan"
                        >
                          Azerbaijan
                        </option>
                        <option
                          data-id="8"
                          data-country_code="+1"
                          value="Bahamas"
                        >
                          Bahamas
                        </option>
                        <option
                          data-id="9"
                          data-country_code="+1"
                          value="Barbados"
                        >
                          Barbados
                        </option>
                        <option
                          data-id="10"
                          data-country_code="+375"
                          value="Belarus"
                        >
                          Belarus
                        </option>
                        <option
                          data-id="11"
                          data-country_code="+32"
                          value="Belgium"
                        >
                          Belgium
                        </option>
                        <option
                          data-id="12"
                          data-country_code="+501"
                          value="Beliz"
                        >
                          Beliz
                        </option>
                        <option
                          data-id="13"
                          data-country_code="+1"
                          value="Bermuda"
                        >
                          Bermuda
                        </option>
                        <option
                          data-id="14"
                          data-country_code="+591"
                          value="Bolivia"
                        >
                          Bolivia
                        </option>
                        <option
                          data-id="15"
                          data-country_code="+387"
                          value="Bosnia and Herzegovina"
                        >
                          Bosnia and Herzegovina
                        </option>
                        <option
                          data-id="16"
                          data-country_code="+267"
                          value="Botswana"
                        >
                          Botswana
                        </option>
                        <option
                          data-id="18"
                          data-country_code="+501"
                          value="Brazil"
                        >
                          Brazil
                        </option>
                        <option
                          data-id="19"
                          data-country_code="+44"
                          value="Britain (United Kingdom)"
                        >
                          Britain (United Kingdom)
                        </option>
                        <option
                          data-id="20"
                          data-country_code="+673"
                          value="Brunei Darussalam"
                        >
                          Brunei Darussalam
                        </option>
                        <option
                          data-id="17"
                          data-country_code="+359"
                          value="Bulgaria"
                        >
                          Bulgaria
                        </option>
                        <option
                          data-id="21"
                          data-country_code="+855"
                          value="Cambodia"
                        >
                          Cambodia
                        </option>
                        <option
                          data-id="22"
                          data-country_code="+1"
                          value="Canada"
                        >
                          Canada
                        </option>
                        <option
                          data-id="23"
                          data-country_code="+1"
                          value="Cayman Islands"
                        >
                          Cayman Islands
                        </option>
                        <option
                          data-id="24"
                          data-country_code="+56"
                          value="Chile"
                        >
                          Chile
                        </option>
                        <option
                          data-id="25"
                          data-country_code="+86"
                          value="China"
                        >
                          China
                        </option>
                        <option
                          data-id="26"
                          data-country_code="+57"
                          value="Colombia"
                        >
                          Colombia
                        </option>
                        <option
                          data-id="27"
                          data-country_code="+506"
                          value="Costa Rica"
                        >
                          Costa Rica
                        </option>
                        <option
                          data-id="28"
                          data-country_code="+385"
                          value="Croatia"
                        >
                          Croatia
                        </option>
                        <option
                          data-id="29"
                          data-country_code="+53"
                          value="Cuba"
                        >
                          Cuba
                        </option>
                        <option
                          data-id="30"
                          data-country_code="+357"
                          value="Cyprus"
                        >
                          Cyprus
                        </option>
                        <option
                          data-id="31"
                          data-country_code="+420"
                          value="Czech Republic"
                        >
                          Czech Republic
                        </option>
                        <option
                          data-id="32"
                          data-country_code="+45"
                          value="Denmark"
                        >
                          Denmark
                        </option>
                        <option
                          data-id="33"
                          data-country_code="+1"
                          value="Dominican Republic"
                        >
                          Dominican Republic
                        </option>
                        <option
                          data-id="34"
                          data-country_code=""
                          value="East Caribbean"
                        >
                          East Caribbean
                        </option>
                        <option
                          data-id="35"
                          data-country_code="+20"
                          value="Egypt"
                        >
                          Egypt
                        </option>
                        <option
                          data-id="36"
                          data-country_code="+503"
                          value="El Salvador"
                        >
                          El Salvador
                        </option>
                        <option
                          data-id="37"
                          data-country_code="+44"
                          value="England (United Kingdom)"
                        >
                          England (United Kingdom)
                        </option>
                        <option data-id="38" data-country_code="" value="Euro">
                          Euro
                        </option>
                        <option
                          data-id="39"
                          data-country_code="+500"
                          value="Falkland Islands"
                        >
                          Falkland Islands
                        </option>
                        <option
                          data-id="40"
                          data-country_code="+679"
                          value="Fiji"
                        >
                          Fiji
                        </option>
                        <option
                          data-id="41"
                          data-country_code="+33"
                          value="France"
                        >
                          France
                        </option>
                        <option
                          data-id="42"
                          data-country_code="+233"
                          value="Ghana"
                        >
                          Ghana
                        </option>
                        <option
                          data-id="43"
                          data-country_code="+350"
                          value="Gibraltar"
                        >
                          Gibraltar
                        </option>
                        <option
                          data-id="44"
                          data-country_code="+30"
                          value="Greece"
                        >
                          Greece
                        </option>
                        <option
                          data-id="45"
                          data-country_code="+502"
                          value="Guatemala"
                        >
                          Guatemala
                        </option>
                        <option
                          data-id="46"
                          data-country_code="+44"
                          value="Guernsey"
                        >
                          Guernsey
                        </option>
                        <option
                          data-id="47"
                          data-country_code="+592"
                          value="Guyana"
                        >
                          Guyana
                        </option>
                        <option
                          data-id="48"
                          data-country_code="+31"
                          value="Holland (Netherlands)"
                        >
                          Holland (Netherlands)
                        </option>
                        <option
                          data-id="49"
                          data-country_code="+504"
                          value="Honduras"
                        >
                          Honduras
                        </option>
                        <option
                          data-id="50"
                          data-country_code="+852"
                          value="Hong Kong"
                        >
                          Hong Kong
                        </option>
                        <option
                          data-id="51"
                          data-country_code="+36"
                          value="Hungary"
                        >
                          Hungary
                        </option>
                        <option
                          data-id="52"
                          data-country_code="+354"
                          value="Iceland"
                        >
                          Iceland
                        </option>
                        <option
                          data-id="53"
                          data-country_code="+91"
                          value="India"
                        >
                          India
                        </option>
                        <option
                          data-id="54"
                          data-country_code="+62"
                          value="Indonesia"
                        >
                          Indonesia
                        </option>
                        <option
                          data-id="55"
                          data-country_code="+98"
                          value="Iran"
                        >
                          Iran
                        </option>
                        <option
                          data-id="56"
                          data-country_code="+353"
                          value="Ireland"
                        >
                          Ireland
                        </option>
                        <option
                          data-id="57"
                          data-country_code="+44"
                          value="Isle of Man"
                        >
                          Isle of Man
                        </option>
                        <option
                          data-id="58"
                          data-country_code="+972"
                          value="Israel"
                        >
                          Israel
                        </option>
                        <option
                          data-id="59"
                          data-country_code="+39"
                          value="Italy"
                        >
                          Italy
                        </option>
                        <option
                          data-id="60"
                          data-country_code="+1"
                          value="Jamaica"
                        >
                          Jamaica
                        </option>
                        <option
                          data-id="61"
                          data-country_code="+81"
                          value="Japan"
                        >
                          Japan
                        </option>
                        <option
                          data-id="62"
                          data-country_code="+44"
                          value="Jersey"
                        >
                          Jersey
                        </option>
                        <option
                          data-id="63"
                          data-country_code="+7"
                          value="Kazakhstan"
                        >
                          Kazakhstan
                        </option>
                        <option
                          data-id="64"
                          data-country_code="+850"
                          value="Korea (North)"
                        >
                          Korea (North)
                        </option>
                        <option
                          data-id="65"
                          data-country_code="+82"
                          value="Korea (South)"
                        >
                          Korea (South)
                        </option>
                        <option
                          data-id="66"
                          data-country_code="+996"
                          value="Kyrgyzstan"
                        >
                          Kyrgyzstan
                        </option>
                        <option
                          data-id="67"
                          data-country_code="+856"
                          value="Laos"
                        >
                          Laos
                        </option>
                        <option
                          data-id="68"
                          data-country_code="+371"
                          value="Latvia"
                        >
                          Latvia
                        </option>
                        <option
                          data-id="69"
                          data-country_code="+961"
                          value="Lebanon"
                        >
                          Lebanon
                        </option>
                        <option
                          data-id="70"
                          data-country_code="+231"
                          value="Liberia"
                        >
                          Liberia
                        </option>
                        <option
                          data-id="71"
                          data-country_code="+423"
                          value="Liechtenstein"
                        >
                          Liechtenstein
                        </option>
                        <option
                          data-id="72"
                          data-country_code="+370"
                          value="Lithuania"
                        >
                          Lithuania
                        </option>
                        <option
                          data-id="73"
                          data-country_code="+352"
                          value="Luxembourg"
                        >
                          Luxembourg
                        </option>
                        <option
                          data-id="74"
                          data-country_code="+389"
                          value="Macedonia"
                        >
                          Macedonia
                        </option>
                        <option
                          data-id="75"
                          data-country_code="+60"
                          value="Malaysia"
                        >
                          Malaysia
                        </option>
                        <option
                          data-id="76"
                          data-country_code="+356"
                          value="Malta"
                        >
                          Malta
                        </option>
                        <option
                          data-id="77"
                          data-country_code="+230"
                          value="Mauritius"
                        >
                          Mauritius
                        </option>
                        <option
                          data-id="78"
                          data-country_code="+52"
                          value="Mexico"
                        >
                          Mexico
                        </option>
                        <option
                          data-id="79"
                          data-country_code="+976"
                          value="Mongolia"
                        >
                          Mongolia
                        </option>
                        <option
                          data-id="80"
                          data-country_code="+258"
                          value="Mozambique"
                        >
                          Mozambique
                        </option>
                        <option
                          data-id="81"
                          data-country_code="+264"
                          value="Namibia"
                        >
                          Namibia
                        </option>
                        <option
                          data-id="82"
                          data-country_code="+977"
                          value="Nepal"
                        >
                          Nepal
                        </option>
                        <option
                          data-id="84"
                          data-country_code="+31"
                          value="Netherlands"
                        >
                          Netherlands
                        </option>
                        <option
                          data-id="83"
                          data-country_code="+599"
                          value="Netherlands Antilles"
                        >
                          Netherlands Antilles
                        </option>
                        <option
                          data-id="85"
                          data-country_code="+64"
                          value="New Zealand"
                        >
                          New Zealand
                        </option>
                        <option
                          data-id="86"
                          data-country_code="+505"
                          value="Nicaragua"
                        >
                          Nicaragua
                        </option>
                        <option
                          data-id="87"
                          data-country_code="+234"
                          value="Nigeria"
                        >
                          Nigeria
                        </option>
                        <option
                          data-id="88"
                          data-country_code="+850
"
                          value="North Korea"
                        >
                          North Korea
                        </option>
                        <option
                          data-id="89"
                          data-country_code="+47"
                          value="Norway"
                        >
                          Norway
                        </option>
                        <option
                          data-id="90"
                          data-country_code="+968"
                          value="Oman"
                        >
                          Oman
                        </option>
                        <option
                          data-id="91"
                          data-country_code="+92"
                          value="Pakistan"
                        >
                          Pakistan
                        </option>
                        <option
                          data-id="92"
                          data-country_code="+507"
                          value="Panama"
                        >
                          Panama
                        </option>
                        <option
                          data-id="93"
                          data-country_code="+595
"
                          value="Paraguay"
                        >
                          Paraguay
                        </option>
                        <option
                          data-id="94"
                          data-country_code="+51
"
                          value="Peru"
                        >
                          Peru
                        </option>
                        <option
                          data-id="95"
                          data-country_code="+63"
                          value="Philippines"
                        >
                          Philippines
                        </option>
                        <option
                          data-id="96"
                          data-country_code="+48"
                          value="Poland"
                        >
                          Poland
                        </option>
                        <option
                          data-id="97"
                          data-country_code="+974"
                          value="Qatar"
                        >
                          Qatar
                        </option>
                        <option
                          data-id="98"
                          data-country_code="+40"
                          value="Romania"
                        >
                          Romania
                        </option>
                        <option
                          data-id="99"
                          data-country_code="+7"
                          value="Russia"
                        >
                          Russia
                        </option>
                        <option
                          data-id="100"
                          data-country_code="+290"
                          value="Saint Helena"
                        >
                          Saint Helena
                        </option>
                        <option
                          data-id="101"
                          data-country_code="+966"
                          value="Saudi Arabia"
                        >
                          Saudi Arabia
                        </option>
                        <option
                          data-id="102"
                          data-country_code="+381"
                          value="Serbia"
                        >
                          Serbia
                        </option>
                        <option
                          data-id="103"
                          data-country_code="+248"
                          value="Seychelles"
                        >
                          Seychelles
                        </option>
                        <option
                          data-id="104"
                          data-country_code="+65"
                          value="Singapore"
                        >
                          Singapore
                        </option>
                        <option
                          data-id="105"
                          data-country_code="+386"
                          value="Slovenia"
                        >
                          Slovenia
                        </option>
                        <option
                          data-id="106"
                          data-country_code="+677"
                          value="Solomon Islands"
                        >
                          Solomon Islands
                        </option>
                        <option
                          data-id="107"
                          data-country_code="+252"
                          value="Somalia"
                        >
                          Somalia
                        </option>
                        <option
                          data-id="108"
                          data-country_code="+27"
                          value="South Africa"
                        >
                          South Africa
                        </option>
                        <option
                          data-id="109"
                          data-country_code="+82"
                          value="South Korea"
                        >
                          South Korea
                        </option>
                        <option
                          data-id="110"
                          data-country_code="+34"
                          value="Spain"
                        >
                          Spain
                        </option>
                        <option
                          data-id="111"
                          data-country_code="+94"
                          value="Sri Lanka"
                        >
                          Sri Lanka
                        </option>
                        <option
                          data-id="114"
                          data-country_code="+597"
                          value="Suriname"
                        >
                          Suriname
                        </option>
                        <option
                          data-id="112"
                          data-country_code="+46"
                          value="Sweden"
                        >
                          Sweden
                        </option>
                        <option
                          data-id="113"
                          data-country_code="+41"
                          value="Switzerland"
                        >
                          Switzerland
                        </option>
                        <option
                          data-id="115"
                          data-country_code="+963"
                          value="Syria"
                        >
                          Syria
                        </option>
                        <option
                          data-id="116"
                          data-country_code="+886"
                          value="Taiwan"
                        >
                          Taiwan
                        </option>
                        <option
                          data-id="117"
                          data-country_code="+66"
                          value="Thailand"
                        >
                          Thailand
                        </option>
                        <option
                          data-id="118"
                          data-country_code="+1"
                          value="Trinidad and Tobago"
                        >
                          Trinidad and Tobago
                        </option>
                        <option
                          data-id="119"
                          data-country_code="+90"
                          value="Turkey"
                        >
                          Turkey
                        </option>
                        <option
                          data-id="121"
                          data-country_code="+688"
                          value="Tuvalu"
                        >
                          Tuvalu
                        </option>
                        <option
                          data-id="134"
                          data-country_code="+971"
                          value="UAE"
                        >
                          UAE
                        </option>
                        <option
                          data-id="122"
                          data-country_code="+380"
                          value="Ukraine"
                        >
                          Ukraine
                        </option>
                        <option
                          data-id="123"
                          data-country_code="+44"
                          value="United Kingdom"
                        >
                          United Kingdom
                        </option>
                        <option
                          data-id="124"
                          data-country_code="+1"
                          value="United States of America"
                        >
                          United States of America
                        </option>
                        <option
                          data-id="125"
                          data-country_code="+598"
                          value="Uruguay"
                        >
                          Uruguay
                        </option>
                        <option
                          data-id="126"
                          data-country_code="+998"
                          value="Uzbekistan"
                        >
                          Uzbekistan
                        </option>
                        <option
                          data-id="127"
                          data-country_code="+379"
                          value="Vatican City"
                        >
                          Vatican City
                        </option>
                        <option
                          data-id="128"
                          data-country_code="+58"
                          value="Venezuela"
                        >
                          Venezuela
                        </option>
                        <option
                          data-id="129"
                          data-country_code="+84"
                          value="Vietnam"
                        >
                          Vietnam
                        </option>
                        <option
                          data-id="130"
                          data-country_code="+967"
                          value="Yemen"
                        >
                          Yemen
                        </option>
                        <option
                          data-id="131"
                          data-country_code="+263"
                          value="Zimbabwe"
                        >
                          Zimbabwe
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-label-group">
                      <label>
                        Phone Number <span>*</span>
                      </label>
                      <div class="d-flex">
                        <input
                          type="text"
                          class="form-control county-code"
                          placeholder="+00"
                          id="country_code"
                          name="country_code"
                          style={{ maxWidth: "100px" }}
                        />
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your phone number"
                          name="phone"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-label-group">
                      <label>
                        What type of development are you searcing for?{" "}
                      </label>
                      <select class="form-control" name="project_type">
                        <option value="">Select development type</option>
                        <option value="Mobile App Development">
                          Mobile App Development
                        </option>
                        <option value="iPhone App Development">
                          iPhone App Development
                        </option>
                        <option value="Android App Development">
                          Android App Development
                        </option>
                        <option value="Cross Platform Mobile App Development">
                          Cross Platform Mobile App Development
                        </option>
                        <option value="Mobile Game Development">
                          Mobile Game Development
                        </option>
                        <option value="IoT Application Development">
                          IoT Application Development
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-label-group">
                      <input
                        type="hidden"
                        name="g-recaptcha-response"
                        id="g-recaptcha-response"
                        value=""
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-label-group">
                      <label>
                        Tell us more about your project? <span>*</span>
                      </label>

                      <textarea
                        class="form-control project_description"
                        placeholder="Type your message here"
                        rows="7"
                        name="project_description"
                      ></textarea>
                      <span
                        class="help-block  html-block"
                        style={{ color: "red", display: "none" }}
                      >
                        <strong>HTML Tag are not allowed</strong>
                      </span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-label-group">
                      <label>
                        <input
                          type="checkbox"
                          name="marketing_tips"
                          value="true"
                          class="mr-2"
                        />
                        Yes, I want to receive the latest marketing tips from
                        Expert App Devs. Read more about how we use your info{" "}
                        <a href="https://www.expertappdevs.com/privacy-policy">
                          Our Privacy Policy
                        </a>
                      </label>
                      <label
                        id="marketing_tips-error"
                        for="marketing_tips"
                        class="error"
                        style={{ display: "none" }}
                      ></label>
                    </div>
                  </div>

                  <div class="col-sm-8"></div>
                  <div class="col-sm-4 text-right d-flex justify-content-end align-items-end">
                    <button class="btn" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4 order-lg-0 order-1 mb-md-0 mb-4 text-lg-right">
              <div class="get-touch text-left">
                <h2>Get In Touch</h2>
                <h5>INDIA</h5>
                <p>
                  {" "}
                  735, Iscon Emporio, Beside Star Bazaar, Satellite, Ahmedabad,
                  Gujarat 380015, India
                </p>
                <p>
                  <a href="tel:+917016166822">+91 701 616 6822</a>
                </p>
                <p>
                  <a href="mailto:sales@expertappdevs.com">
                    sales@expertappdevs.com
                  </a>
                </p>
                <p>
                  <a href="mailto:digital@expertappdevs.com" class="d-none">
                    digital@expertappdevs.com
                  </a>
                </p>

                <h5>USA</h5>
                <p>
                  Suite 1-454, 7558 W Thunderbird Rd, Peoria, Phoenix, AZ 85381
                  USA
                </p>

                <p>
                  <a href="tel:+16232422622">+1-623-242-2622</a>
                </p>
                <p>
                  <a href="mailto:sales@expertappdevs.com">
                    sales@expertappdevs.com
                  </a>
                </p>
                <p>
                  <a href="mailto:digital@expertappdevs.com" class="d-none">
                    digital@expertappdevs.com
                  </a>
                </p>

                <h5>UAE</h5>
                <p>
                  Unit No: 30-01-5111, Jewellery &amp; Gemplex 3, Plot No:
                  DMCC-PH2-J&amp;GPlexS, Jewellery &amp; Gemplex, Dubai, United
                  Arab Emirates
                </p>
                <p>
                  <a href="tel:+971588711412">+971 58 871 1412</a>
                </p>
                <p>
                  <a href="mailto:sales@expertappdevs.com">
                    sales@expertappdevs.com
                  </a>
                </p>
                <p>
                  <a href="mailto:digital@expertappdevs.com" class="d-none">
                    digital@expertappdevs.com
                  </a>
                </p>

                <div class="social-icon">
                  <ul>
                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        title="facebook"
                        href="https://www.facebook.com/ExpertAppDevs"
                      >
                        <svg viewBox="0 0 320 512" width="10" height="17">
                          <path
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        title="instagram"
                        href="https://www.instagram.com/expertappdevs/"
                      >
                        {" "}
                        <svg viewBox="0 0 448 512" width="14" height="17">
                          <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            fill="#fff"
                          ></path>
                        </svg>{" "}
                      </a>{" "}
                    </li>

                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        title="twitter"
                        href="https://twitter.com/ExpertAppDevs"
                      >
                        {" "}
                        <svg
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                        </svg>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        title="linkedin"
                        href="https://www.linkedin.com/company/expert-app-devs/"
                      >
                        <svg viewBox="0 0 448 512" width="14" height="17">
                          <path
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                            fill="#fff"
                          ></path>
                        </svg>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        title="youtube"
                        href="https://www.youtube.com/channel/UCqJtHff6w43-wV0tRPtBTsw"
                      >
                        <svg viewBox="0 0 576 512" width="22" height="22">
                          <path
                            d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                            fill="#fff"
                          ></path>
                        </svg>{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        title="skype"
                        href="skype:live:.cid.bb618fdf0616a929?chat"
                      >
                        {" "}
                        <svg viewBox="0 0 448 512" width="14" height="17">
                          <path
                            d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"
                            fill="#fff"
                          ></path>
                        </svg>{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        title="dribbble"
                        href="https://dribbble.com/ExpertAppDevs"
                      >
                        <svg viewBox="0 0 56.693 56.693" width="15" height="19">
                          <path
                            clip-rule="evenodd"
                            d="M52.43,24.152c-0.324-1.588-0.811-3.152-1.441-4.646  c-0.619-1.467-1.387-2.879-2.279-4.199c-0.885-1.309-1.9-2.539-3.018-3.656c-1.117-1.119-2.348-2.135-3.656-3.018  c-1.32-0.895-2.734-1.66-4.199-2.281c-1.494-0.629-3.057-1.117-4.646-1.439c-1.627-0.334-3.303-0.504-4.977-0.504  c-1.676,0-3.35,0.17-4.979,0.504c-1.588,0.322-3.152,0.811-4.645,1.439c-1.465,0.621-2.879,1.387-4.201,2.281  c-1.309,0.883-2.539,1.898-3.656,3.018c-1.118,1.117-2.132,2.348-3.016,3.656c-0.893,1.32-1.66,2.732-2.279,4.199  C4.805,21,4.32,22.564,3.995,24.152c-0.333,1.625-0.502,3.301-0.502,4.976c0,1.678,0.169,3.354,0.502,4.98  c0.325,1.588,0.811,3.152,1.442,4.645c0.619,1.465,1.387,2.881,2.279,4.201c0.884,1.309,1.898,2.537,3.016,3.656  c1.117,1.117,2.348,2.131,3.656,3.016c1.322,0.893,2.736,1.66,4.201,2.279c1.492,0.633,3.057,1.115,4.645,1.441  c1.629,0.336,3.303,0.504,4.979,0.504c1.674,0,3.35-0.168,4.977-0.504c1.59-0.326,3.152-0.809,4.646-1.441  c1.465-0.619,2.879-1.387,4.199-2.279c1.309-0.885,2.539-1.898,3.656-3.016c1.117-1.119,2.133-2.348,3.018-3.656  c0.893-1.32,1.66-2.736,2.279-4.201c0.631-1.492,1.117-3.057,1.441-4.645c0.334-1.627,0.502-3.303,0.502-4.98  C52.932,27.453,52.764,25.777,52.43,24.152z M49.316,28.919c-0.305-0.066-7.449-1.604-14.703-0.692  c-0.148-0.361-0.299-0.725-0.455-1.09c-0.439-1.033-0.912-2.057-1.404-3.062c8.338-3.402,11.723-8.297,11.762-8.355  C47.477,19.314,49.268,23.908,49.316,28.919z M42.156,13.285c-0.053,0.082-3.059,4.658-11.027,7.645  c-3.609-6.631-7.574-11.898-7.891-12.316c1.596-0.387,3.26-0.596,4.975-0.596C33.559,8.018,38.436,10.01,42.156,13.285z   M23.156,8.631c0,0.002-0.004,0.004-0.004,0.004s-0.023,0.006-0.062,0.014C23.111,8.643,23.135,8.639,23.156,8.631z M19.205,10.035  c0.281,0.377,4.186,5.67,7.84,12.164c-10.137,2.693-18.934,2.588-19.492,2.578C8.925,18.238,13.318,12.816,19.205,10.035z   M7.102,29.128c0-0.225,0.01-0.445,0.018-0.667c0.372,0.008,10.804,0.245,21.673-3.008c0.605,1.184,1.184,2.387,1.713,3.589  c-0.279,0.078-0.557,0.162-0.832,0.252c-11.393,3.682-17.172,13.934-17.172,13.934s0.008,0.006,0.008,0.01  C9.149,39.497,7.102,34.552,7.102,29.128z M28.213,50.241c-5.109,0-9.795-1.816-13.447-4.838c0.277,0.225,0.473,0.369,0.473,0.369  s4.047-8.826,16.566-13.188c0.047-0.018,0.094-0.031,0.141-0.045c2.971,7.719,4.197,14.184,4.51,16.029  C33.922,49.646,31.137,50.241,28.213,50.241z M40.01,46.64c-0.215-1.275-1.34-7.471-4.109-15.08  c6.814-1.09,12.721,0.779,13.156,0.922C48.117,38.364,44.75,43.438,40.01,46.64z"
                            fill-rule="evenodd"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        title="behance"
                        href="https://www.behance.net/expert-app-devs"
                      >
                        <svg width="15" height="19" viewBox="0 0 24 24">
                          <path
                            d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
                            fill="#fff"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

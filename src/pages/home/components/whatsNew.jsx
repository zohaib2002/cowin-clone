import "./styles/whatsNew.css";

function Dividor() {
  return <div style={{ height: "1px", backgroundColor: "white" }}></div>;
}

function AccordionItem(props) {
  return (
    // Same as React.Fragment
    <>
      <div className="accordion-item tp">
        <h2 className="accordion-header" id={"flush-heading" + props.id}>
          <button
            className="accordion-button collapsed tp"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#flush-collapse" + props.id}
            aria-expanded="false"
            aria-controls={"flush-collapse" + props.id}
          >
            <div style={{ paddingRight: "25%" }}>{props.title}</div>
          </button>
        </h2>
        <div
          id={"flush-collapse" + props.id}
          className="accordion-collapse collapse"
          aria-labelledby={"flush-heading" + props.id}
        >
          <div className="accordion-body">{props.text}</div>
        </div>
      </div>
      <Dividor />
    </>
  );
}

function Accordion(props) {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {props.children}
    </div>
  );
}

// Components have to start with uppercase

function WhatsNew() {
  return (
    <div className="whats-new">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1 className="wn-heading">What's New On Co-WIN?</h1>
          </div>
          <div className="d-none d-md-block" style={{ width: 50 }}></div>
          <div className="col-md-8">
            <Accordion>
              <AccordionItem
                title="HCW/FLW and Citizens in 60+ age group can now avail Precaution Dose"
                text="From 10th January 2022 precaution dose is available for HCW/FLW and Senior Citizens, 39 weeks after date of second dose.Precaution dose is available for now, for those who have taken Covaxin or Covishield.Citizens in 60+ age group having co-morbidity should avail precaution dose on medical advice.Appointments can be booked from 8th January 2022."
                id="One"
              />
              <AccordionItem
                title="Vaccine available for age group 15-18 yrs"
                text="Children of age group 15-18 yrs can now register on Co-WIN portal using AADHAAR Card, PAN Card, Unique Disability ID, Ration Card with Photo and School Photo ID Card. Only COVAXIN is approved for this age group currently."
                id="Two"
              />
              <AccordionItem
                title="New feature to Share Your Vaccination Status on different social media platforms"
                text="This exciting new feature added to Co-WIN allows you to Share Your Vaccination Status now among your social circle. You need to be fully or partially vaccinated to use this feature."
                id="Three"
              />
              <AccordionItem
                title="You can download your vaccination certificate for International Travel"
                text="This new feature allows fully vaccinated citizens to update existing photo identity to passport number and date of birth to get International Travel Certificate."
                id="Four"
              />
              <AccordionItem
                title="You can register as a foreign national on Co-WIN and get vaccinated"
                text="New feature has been provided for foreign national. You can easily be vaccinated just by providing your basic details. If you have been administered with Dose 1 vaccine in foreign country, you'll have provide it's details to Vaccinator while going for Vaccination."
                id="Five"
              />
              <AccordionItem
                title="Citizens can link their passports to Co-WIN issued certificate by raising an issue in their accounts"
                text="This is a new feature provided where you can link your passport by entering Passport number. In order to link your passport to the certificate you need to login into your Co-WIN portal and then raise an issue to get your passport linked by clicking on &#8220;Add Passport Details to my vaccination certificate&#8221;"
                id="Six"
              />
              <AccordionItem
                title="Introducing “Raise an Issue” to Co-WIN for all your vaccine certificate and account related issues"
                text="You can now get all your Issues related to your Vaccine Certificate at one place. All you need to do is to login to your Co-WIN portal and click on &#8220;Raise an Issue&#8221; . Multiple Issue options are provided. You can raise your concerned issues accordingly."
                id="Seven"
              />
              <AccordionItem
                title="Check your eligibility for Dose 2 by signing in on Co-WIN with your registered mobile number"
                text="Citizens administered with dose 1 can now check their eligibility for Dose 2 by performing a single step.&#8220;Login to your Co-WIN portal&#8221; and there you have your eligibility mention next to your name, highlighted as &#8220;No. of Days left for Dose 2&#8221;."
                id="Eight"
              />
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;

import "./styles/callbar.css";

function Callbar() {
  return (
    <div className="callbar">
      <div className="row">
        <div className="col-2 d-none d-sm-block support-col my-auto">
          <i class="bi bi-telephone-fill"></i>
          &nbsp;&nbsp;Support for COVID-19
        </div>
        <div className="col">
          <div className="row title-row">
            <div className="col"> Heath Ministry </div>
            <div className="col-1"></div>
            <div className="col"> Child </div>
            <div className="col"> Mental Health </div>
            <div className="col"> Senior Citizen </div>
            <div className="col d-none d-md-block"> NCW </div>
          </div>
          <div className="row">
            <div className="col">
              <div>
                <a href="tel:+911123978046">91-11-2397 8046</a>&nbsp; or &nbsp;
                <a href="tel:1075">1075</a>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col">
              <a href="tel:1098">1098</a>
            </div>
            <div className="col">
              <a href="tel:08046110007">80461 10007</a>
            </div>
            <div className="col">
              <a href="tel:14567">14567</a>
            </div>
            <div className="col d-none d-md-block">
              <a href="tel:7827170170">78271 70170</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callbar;

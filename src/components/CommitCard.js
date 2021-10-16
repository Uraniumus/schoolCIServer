import './CommitCard.css';

function CommitCard() {
  return (
    <div className="ccard wrap"> 
        <div className="grid">
            <div className="ccard__status success">
                <i></i>
            </div>
                <div className="ccard__comment">
                    <span className="ccard__comment-num success">#1368</span>
                    <span className="ccard__comment-text">add documentation for postgres scaler</span>
                </div>
                <div className="ccard__info">
                    <span className="ccard__info-commit">
                        <i></i>
                        <span className="ccard__info-commit-branch">master</span>
                        <span className="ccard__info-commit-hash">9c9f0b9</span>
                    </span>
                    <span className="ccard_info-person">
                        <i></i>
                        <span className="ccard_info-person-name">Philip Kirkorov</span>
                    </span>
                </div> 
                <span className="separator"></span>
                <span className="ccard__date">
                    <i></i>
                    <span>21 янв, 03:06</span>
                </span>
                <span className="ccard__timespent">
                    <i></i>
                    <span>1 ч 20 мин</span>
                </span>
        </div>
    </div>
  );
}

export default CommitCard;

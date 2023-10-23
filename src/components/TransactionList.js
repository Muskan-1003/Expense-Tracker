import React from 'react';

const TransactionList = () => {
    return (
        <div>
            <div>
                History
            </div>
            <ul className="list">
                <li className="minus">
                    Cash <span>-$400</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    );
}

export default TransactionList;

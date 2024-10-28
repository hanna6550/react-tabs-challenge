import React from 'react';
import { useState, useEffect } from 'react';

const Tabs = () => {

    // const tabs = [
    //     {
    //         id: 1,
    //         tabTitle: 'Tab 1',
    //         title: 'Title 1',
    //         content: 'In sint do non adipisicing incididunt excepteur sit. Voluptate esse aliqua pariatur dolor ex occaecat sunt eu. Pariatur ullamco id dolore sint proident sint nostrud nisi sit id est. Duis et excepteur cupidatat sint nisi dolore qui irure qui in id excepteur irure laboris. Pariatur mollit duis cupidatat nisi Lorem non et in dolor aliquip ea sint aute. Dolore aute duis laboris exercitation occaecat sunt. Enim veniam Lorem do ipsum aliqua qui eu ipsum consectetur ex dolore ea ipsum.'
    //     },
    //     {
    //         id: 2,
    //         tabTitle: 'Tab 2',
    //         title: 'Title 2',
    //         content: 'Non aliquip fugiat velit ad officia Lorem tempor cillum incididunt elit proident mollit. Reprehenderit qui nisi ut occaecat minim velit deserunt occaecat quis magna mollit. Veniam proident consectetur sunt mollit est magna Lorem voluptate enim cupidatat consequat. Et pariatur aliquip commodo nisi deserunt exercitation enim officia voluptate in nisi. Eu ea esse qui est ea pariatur nostrud non elit irure. Ad exercitation Lorem exercitation ipsum eiusmod ea duis ad mollit veniam aliquip veniam. Lorem pariatur elit ea duis.'
    //     },
    //     {
    //         id: 3,
    //         tabTitle: 'Tab 3',
    //         title: 'Title 3',
    //         content: 'Deserunt et elit elit ad dolor magna. Nisi amet consectetur Lorem eiusmod dolore adipisicing do reprehenderit. Voluptate consequat magna nostrud in officia labore. Minim excepteur consectetur quis nostrud nisi magna duis sunt sint qui. Fugiat ea reprehenderit eiusmod proident officia. Consequat labore qui velit Lorem consectetur incididunt ut nisi.'
    //     },
    //     {
    //         id: 4,
    //         tabTitle: 'Tab 4',
    //         title: 'Title 4',
    //         content: 'Minim in dolor do fugiat laborum duis labore consectetur. Amet ut sint ipsum dolor ad nostrud commodo sunt veniam enim aliquip nulla sint ullamco. Do cupidatat et quis laborum esse est commodo. Commodo sunt consectetur do consequat minim occaecat id magna ullamco consequat irure.'
    //     }
    // ];

    const [content, setContent] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    const fetchData = async () => {
        const cachedData = localStorage.getItem('tabContent');
        if (cachedData) {
        setContent(JSON.parse(cachedData));
        console.log('Loaded content from cache.');
        return;
        }

        try {
        const response = await fetch(
            `https://corsproxy.io/?https://loripsum.net/api/4/plaintext`
        );
        const text = await response.text();
        const paragraphs = text.split('\n\n');

        setContent(paragraphs);
        localStorage.setItem('tabContent', JSON.stringify(paragraphs));
        } catch (error) {
        console.error('Error fetching content:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='container'>
            {/* TODO Add tabs here */}
            
            <div className="tabs">
                <button onClick={() => setActiveTab(0)} className={activeTab === 0 ? 'active' : ''}>Tab 1</button>
                <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''}>Tab 2</button>
                <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'active' : ''}>Tab 3</button>
                <button onClick={() => setActiveTab(3)} className={activeTab === 3 ? 'active' : ''}>Tab 4</button>
            </div>
            <div className="content">
                <h3>Title {activeTab + 1}</h3>
                <p>{content[activeTab] ? content[activeTab] : 'Loading...'}</p>
            </div>
                
        </div>
    );
}

export default Tabs;
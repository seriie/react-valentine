import { useEffect } from "react";
import useAlert from "../hooks/UseAlert";
import './content.css';
import mail from '../../assets/image/mail.png';
import MyAlerts from "../myalerts/Myalerts";

export default function Content() {
    const { alert, showAlert } = useAlert();
    const yourNumber = import.meta.env.VITE_YOUR_PHONE_NUMBER;

    useEffect(() => {
        const noBtn = document.querySelector('.no-btn');
        const yesBtn = document.querySelector('.yes-btn');
        const gif = document.querySelector('.gif');
        const text = document.querySelector('.question');
        const reply = document.querySelector('.reply-container');


        const handleShowReply = () => {
            reply.style.display = "block";
        };

        yesBtn.addEventListener('click', function() {
            text.textContent = "Thank You, I like you too";
            gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
            handleHideButtons();
            handleShowReply();
        });

        const handleBtnFocus = () => {
            if (window.innerWidth >= 640) {
                showAlert('U cannot cheat!', 2000);
                noBtn.blur();
            }
        };

        const handleHideButtons = () => {
            noBtn.style.display = 'none';
            yesBtn.style.display = 'none';
        };
        
        const handleMouseEnter = () => {
            const noBtnRect = noBtn.getBoundingClientRect();
            const maxX = window.innerWidth - noBtnRect.width;
            const maxY = window.innerHeight - noBtnRect.height;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            noBtn.style.transition = ".5s ease";
            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;
        };

        const handleTransitionEnd = () => {
            noBtn.style.transition = "";
        };

        noBtn.addEventListener('mouseenter', handleMouseEnter);
        noBtn.addEventListener("transitionend", handleTransitionEnd);
        noBtn.addEventListener('focus', handleBtnFocus);  // Tambahkan event listener focus

        return () => {
            noBtn.removeEventListener('mouseenter', handleMouseEnter);
            noBtn.removeEventListener('transitionend', handleTransitionEnd);
            noBtn.removeEventListener('focus', handleBtnFocus);  // Hapus event listener focus saat cleanup
        };
    }, [showAlert]);

    return (
        <>
            <MyAlerts alert={alert} />
            <div>
                <h1 className="question -mt-[100px] text-center text-3xl font-bold text-slate-100">Would You Be My Valentine</h1>
                <img className='gif w-full h-auto' src='https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp' alt="GIF" />
                <div className="buttons mt-[50px] h-[50px] justify-center w-full flex">
                    <button className="button yes-btn focus:outline-pink-600 ml-[200px] absolute w-[150px] shadow-dark bg-red-600 rounded-full text-slate-50 font-bold">Yes</button>
                    <button className="button no-btn focus:outline-pink-600 mr-[200px] absolute w-[150px] shadow-dark rounded-full text-red-600 border-solid border-red-600 bg-slate-50 border-2 font-bold">No</button>
                </div>
                <div className="reply-container left-0 right-0 absolute -mt-[100px] hidden">
                    <div className="reply text-center text-3xl text-slate-100">Reply:</div>
                    <img className="mail w-[150px] justify-center m-auto cursor-pointer" onClick={() => window.location.href = `https://wa.me/${yourNumber}?text=makasii+zii`} src={mail} alt="Mail" />
                </div>
            </div>
        </>
    );
}
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faUser } from '@fortawesome/free-solid-svg-icons';
import "./index.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
export default function index() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faFilm} />
                        Movie Film
                    </a>
                </li>
                <li>
                    <a href="/profile">
                        <FontAwesomeIcon icon={faUser} />
                        Profile
                    </a>
                </li>
            </ul>
        </nav>
    );
}

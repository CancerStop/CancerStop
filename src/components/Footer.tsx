import '../styles/componentStyles/FooterStyles.css';
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="footer">
			<p className="footer_text">
				Content provided is for information and research
				purposes only. Always consult with your healthcare
				provider and healthcare professional. No
				responsibility is claimed whatsoever. Please refer
				to the <Link to={'/faq'}>FAQ section</Link> for further information.
			</p>

			<p className="footer_text">
				© 2024{' '}
				<a
					href="https://www.queromatics.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Queromatics
				</a>
				. All Rights Reserved | Developed by
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/vedanth-ramji-191530215/"
				>
					{' '}
					Vedanth Ramji
				</a>
				,
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/BalaM314"
				>
					{' '}
					Bala M
				</a>
				,
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/ganeshramjanakiraman/"
				>
					{' '}
					Ganesh Ram
				</a>
				,
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/govind-gnanakumar/"
				>
					{' '}
					Govind Gnanakumar
				</a>
				, and
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/natarajanganesan/"
				>
					{' '}
					Dr. Natarajan Ganesan
				</a>
				.
			</p>
		</div>
	);
}

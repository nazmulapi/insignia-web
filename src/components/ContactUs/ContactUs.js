import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
// import { toastNotify } from '../../app-helpers/appHelpers';
// const axios = require('axios');

const ContactUs = () => {
	const schema = Yup.object({
		full_name: Yup.string().required().min(2).max(20),
		email: Yup.string().email().max(255).required(),
		mobile: Yup.string().required(),
		subject: Yup.string().required(),
		messages: Yup.string().required(),
	}).required();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	/**
	 * @method  {sendContactFormData}
	 * @return  {}
	 */
	// const sendContactFormData = async (fromData) => {
	// 	const { full_name, email, subject, messages } = fromData;
	// 	try {
	// 		const response = await axios.get(`https://insignia-resorts.com/mail/contact.php?full_name=${full_name}&email=${email}&subject=${subject}&messages=${messages}`);
	// 		reset();
	// 		toastNotify(toast, 'success', 'Message has been sent successfully !!');
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

	const onSubmit = (data) => {
		console.log(data);
		reset();
		// sendContactFormData(data);
	};

	/**
	 * @method Unmount
	 * @param  {}
	 */
	useEffect(() => {
		return () => {
			toast.dismiss();
		};
	}, []);

	return (
		<>
			<div id="contact-us" className="py-5 pt-0">
				<div className="container py-2 pb-4">
					<div className="section-header text-center mb-5">
						<h1 className="display-1 section-title"> Get In Touch </h1>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="row">
							<div className="col-xl-9 mx-auto">
								<fieldset className="border rounded mb-3 p-4">
									<legend className="w-auto fs-4 fw-bold ms-5 bg-dark rounded text-light font-monospace px-3" style={{ marginTop: '-42px' }}>
										Say Hi,
									</legend>
									<div className="row form-group mb-2">
										<label htmlFor="#" className="col-sm-3 fs-6 text-sm-end col-form-label">
											Name
										</label>
										<div className="col">
											<input type="text" {...register('full_name')} name="full_name" className="form-control" placeholder="Name" />
											<p className="mb-0 text-danger">{errors.full_name?.message}</p>
										</div>
									</div>
									<div className="row form-group mb-2">
										<label htmlFor="#" className="col-sm-3 fs-6 text-sm-end col-form-label">
											Email
										</label>
										<div className="col">
											<input type="email" {...register('email')} name="email" className="form-control" placeholder="Email" />
											<p className="mb-0 text-danger">{errors.email?.message}</p>
										</div>
									</div>
									<div className="row form-group mb-2">
										<label htmlFor="#" className="col-sm-3 fs-6 text-sm-end col-form-label">
											Mobile
										</label>
										<div className="col">
											<input type="text" {...register('mobile')} name="mobile" className="form-control" placeholder="Mobile" />
											<p className="mb-0 text-danger">{errors.mobile?.message}</p>
										</div>
									</div>
									<div className="row form-group mb-2">
										<label htmlFor="#" className="col-sm-3 fs-6 text-sm-end col-form-label">
											Subject
										</label>
										<div className="col">
											<input type="text" {...register('subject')} name="subject" className="form-control" placeholder="Subject" />
											<p className="mb-0 text-danger">{errors.subject?.message}</p>
										</div>
									</div>
									<div className="row form-group mb-2">
										<label htmlFor="#" className="col-sm-3 fs-6 text-sm-end col-form-label">
											Messages
										</label>
										<div className="col">
											<textarea {...register('messages')} rows="4" name="messages" className="form-control" placeholder="Write..."></textarea>
											<p className="mb-0 text-danger">{errors.messages?.message}</p>
										</div>
									</div>
									<div className="row form-group mb-2">
										<label htmlFor="#" className="col-sm-3 fs-6 text-sm-end col-form-label">
											Contact For Booking
										</label>
										<div className="col">
											<div className="form-control border-0 ps-0">
												<p className="mb-0 text-light">Phone : <a className='text-decoration-none' href="tel:++8809612788788">+88 09612-788788</a></p>
												<p className="mb-0 text-light">Email : <a className='text-decoration-none' href="mailto:reservation@insignia-resorts.net">reservation@insignia-resorts.net</a></p>
											</div>
										</div>
									</div>
								</fieldset>
								<div className="row form-group mt-0">
									<div className="col ps-sm-4 offset-sm-3">
										<button type="submit" className="btn btn-primary bg-gradient px-3">
											Submit
										</button>
									</div>
								</div>
							</div>
							<div className="col-xl-12 mx-auto">
								<div className="google-map border rounded p-2 mt-5">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7295.1700265577865!2d90.37348689458503!3d23.904329908486282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62b639a565a42a33!2sInsignia%20Hotels%20%26%20Resorts!5e0!3m2!1sen!2sbd!4v1658031633195!5m2!1sen!2sbd"
										className="w-100 border-0 d-block mb-0"
										height="450"
										allowFullScreen
										loading="lazy"
										title="iframe"
									></iframe>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ContactUs;

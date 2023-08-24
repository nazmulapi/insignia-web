import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import { BsPatchCheckFill } from 'react-icons/bs';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { makeRandomInteger } from '../../app-helpers/appHelpers';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';
import ReactTooltip from 'react-tooltip';
import { Modal } from 'react-bootstrap';
import './BookingForm.scss';
const axios = require('axios');
const _ = require('lodash');

const BookingAvailabilityCheck = ({ eventType }) => {
	const schema = Yup.object({
		menu_type_id: Yup.string().required(),
		full_name: Yup.string().required().min(2).max(20),
		contact_number: Yup.string()
			.required()
			.matches(/^[0-9]+$/, 'Enter number only')
			.min(11)
			.max(66),
		email: Yup.string().email().max(255).required(),
		address: Yup.string().required(),
		date: Yup.date().required(),
		number_of_drivers: Yup.string().required(),
		selected_floor_id: Yup.string().required(),
	}).required();

	const {
		control,
		register,
		reset,
		handleSubmit,
		getValues,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const [searchParams] = useSearchParams();

	const [floorLists, setFloorLists] = useState([]);
	const [floorWiseTable, setFloorWiseTable] = useState(null);
	const [isSelectFloorFormGroupShow, setIsSelectFloorFormGroupShow] = useState(false);
	const [isBookingFormDisabled, setIsBookingFormDisabled] = useState(true);
	const [isReservationDateAndTimeValid, setIsReservationDateAndTimeValid] = useState(null);
	const [isOfflineReservation, setIsOfflineReservation] = useState();
	const [isCustomPersonEnable, setIsCustomPersonEnable] = useState(false);
	const [isCustomChildrenEnable, setIsCustomChildrenEnable] = useState(false);
	const [isCustomDriverEnable, setIsCustomDriverEnable] = useState(false);
	const [bookingInfoModalShow, setBookingInfoModalShow] = useState(false);
	const [comboProducts, setComboProducts] = useState([]);
	const [hallRoomCost, setHallRoomCost] = useState(100000);
	const [totalAmount, setTotalAmount] = useState(0);
	const [payableAmount, setPayableAmount] = useState(0);

	/**
	 * getComboProducts
	 * created_at:- 01/09/2022 12:22:09
	 */
	useEffect(() => {
		if (!_.isNil(eventType)) {
			const getComboProducts = async () => {
				try {
					const response = await axios.get(`/event-type/${eventType}`);
					let combo = response?.data?.data.map((cp) => {
						return {
							...cp,
							id: cp?.combo_id,
						};
					});
					if (!_.isUndefined(combo)) setComboProducts(combo);
				} catch (error) {
					console.error(error);
				}
			};
			getComboProducts();
		}
	}, [eventType]);

	/**
	 * @method {Debounce callback}
	 * @description {}
	 * type {}
	 * return {}
	 */
	const debounced = useDebouncedCallback(
		// function
		(value) => {
			let sfID = getValues('selected_floor_id');
			makeFloorFromGroupVisible();
			!_.isUndefined(sfID) && getFloorWiseTable(sfID);
		},
		// delay in ms
		200
	);

	/**
	 * @method {getBookingScheduleByMenuType}
	 * @description {}
	 * type {}
	 * return {}
	 */
	const getBookingScheduleByMenuType = async (menu_type_id) => {
		try {
			const response = await axios.get(`/menu-type/${menu_type_id}`);
			const { sc_time, ec_time } = response?.data[0];
			let startTime = moment(sc_time, 'hh:mma').format('hh:mma');
			let endTime = moment(ec_time, 'hh:mma').format('hh:mma');
			setValue('time', `${startTime} to ${endTime}`);

			let { date } = getValues();
			if (!_.isUndefined(date)) {
				let reservationDate = moment(date).format('MM/DD/YYYY');
				let today = moment().format('MM/DD/YYYY');

				if (moment(reservationDate).isSame(today) === true) {
					let { time } = getValues();
					let endTime = !_.isUndefined(time) && moment(time.split('to')[1], 'hh:mma');
					let currentTime = moment(moment().format('hh:mma'), 'hh:mma');
					if (currentTime.isAfter(endTime) === true) {
						setIsReservationDateAndTimeValid(
							`Today's current time [${moment().format('hh:mm A')}] has passed beyond the last time [${ec_time}].`
						);
					} else {
						setIsReservationDateAndTimeValid(null);
					}
				} else {
					setIsReservationDateAndTimeValid(null);
				}
			}
		} catch (error) {
			console.error(error);
		}
	};

	/**
	 * @method {getAllFloorList}
	 * @description {}
	 * type {}
	 * return {}
	 */
	const getAllFloorList = async () => {
		try {
			const response = await axios.get(`/floor-list`);
			let floors = response?.data?.data;
			setFloorLists(floors);
		} catch (error) {
			console.error(error);
		}
	};

	/**
	 * @method {makeFloorFromGroupVisible}
	 * @description {}
	 * type {}
	 * return {}
	 */
	const makeFloorFromGroupVisible = () => {
		let numberOfPerson = isCustomPersonEnable === true ? getValues('number_of_person_custom') : getValues('number_of_person');
		let numberOfChildren = isCustomChildrenEnable === true ? getValues('number_of_children_custom') : getValues('number_of_children');
		let menuTypeId = getValues('menu_type_id');
		let date = getValues('date');

		if (numberOfPerson !== '-- Number of Person --') {
			if (!_.isNil(menuTypeId) && !_.isNil(date)) {
				setIsSelectFloorFormGroupShow(true);
			} else {
				setIsSelectFloorFormGroupShow(false);
			}
			return { numberOfPerson: numberOfPerson, numberOfChildren };
		} else {
			return { numberOfPerson: null, numberOfChildren };
		}
	};

	/**
	 * @method {getFloorWiseTable}
	 * @description {}
	 * type {}
	 * return {}
	 */
	const getFloorWiseTable = async (id) => {
		if (!_.isNil(id) && _.isInteger(Number.parseInt(id))) {
			try {
				const { numberOfPerson, numberOfChildren } = makeFloorFromGroupVisible();
				if (_.isInteger(parseInt(numberOfPerson)) === true && _.isInteger(parseInt(numberOfChildren)) === true) {
					const floorWiseTableResponse = await axios.get(`/floor-list/${id}`);
					const reservationListResponse = await axios.get(`/reservation-list`);
					let allTables = floorWiseTableResponse?.data?.data;
					let { reservationList } = reservationListResponse?.data;
					let { date: selectedDate, time: selectedTime } = getValues();
					if (!_.isUndefined(selectedDate) && !_.isUndefined(selectedTime)) {
						let reservedTableIds =
							_.size(reservationList) > 0 &&
							reservationList.forEach((rl) => {
								const { reserved_date, reserved_time, table_id, floor_id } = rl;
								let isSameDate = moment(selectedDate, 'MM/DD/YYYY').isSame(reserved_date, 'MM/DD/YYYY');
								let isSameTime =
									reserved_time.toString().toLowerCase().replaceAll(/\s/g, '') ===
									selectedTime.toString().toLowerCase().replaceAll(/\s/g, '');
								if (isSameDate === true && isSameTime === true) {
									if (Number.parseInt(id) === Number.parseInt(floor_id)) return table_id;
								}
							});

						let tab = _.isArray(reservedTableIds) ? allTables.filter((ec) => !reservedTableIds.includes(ec?.id)) : allTables;
						let availableTables = tab.filter((ft) => ft?.capacity >= parseInt(numberOfPerson) + parseInt(numberOfChildren));
						let tables = availableTables.map((aft) => {
							let s = parseInt(numberOfPerson) + parseInt(numberOfChildren);
							if (isOfflineReservation === true) {
								return {
									isTotallyFree: true,
									...aft,
								};
							} else {
								if (s >= parseInt(aft?.min_capacity)) {
									return {
										isTotallyFree: true,
										...aft,
									};
								} else {
									return {
										isTotallyFree: false,
										...aft,
									};
								}
							}
						});
						setFloorWiseTable(tables);
						setIsBookingFormDisabled(false);
					} else {
						setIsBookingFormDisabled(true);
					}
				}
			} catch (error) {
				console.error(error);
			}
		} else {
			console.log('Floor id does not found !!');
		}
	};

	/**
	 * @method {sendFormDataForOnlineReservation}
	 * @description {}
	 * type {}
	 * return {}
	 */
	const sendFormDataForEventBooking = async (formValues) => {
		try {
			const res = await axios.post(`/create-event-booking`, formValues);
			if (res?.data?.status === true) {
				toast.success(res?.data?.message ?? 'Successfully Booked !!', {
					position: 'bottom-right',
					theme: 'colored',
				});
				getAllFloorList();
				setFloorWiseTable(null);
				setIsBookingFormDisabled(true);
				setIsSelectFloorFormGroupShow(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * @method {onSubmit}
	 * @description {}
	 * type {}
	 * return {}
	 */
	const onSubmit = (data) => {
		let booking_formData = data;

		if (isCustomPersonEnable === true) {
			booking_formData['number_of_person'] = data?.number_of_person_custom;
		}
		if (isCustomChildrenEnable === true) {
			booking_formData['number_of_children'] = data?.number_of_children_custom;
		}

		if (isCustomDriverEnable === true) {
			booking_formData['number_of_drivers'] = data?.number_of_drivers_custom;
		}

		booking_formData['date'] = moment(booking_formData?.date).format('YYYY-MM-DD');
		booking_formData['event_type'] = eventType;
		booking_formData['combo_package_id'] = Number.parseInt(data?.combo_package_id);
		booking_formData['menu_type_id'] = Number.parseInt(data?.menu_type_id);
		booking_formData['selected_floor_id'] = Number.parseInt(data?.selected_floor_id);
		booking_formData['selected_table_id'] = Number.parseInt(data?.selected_table_id);
		sendFormDataForEventBooking(booking_formData);
		reset();
	};

	/**
	 * @method {startReloadOnDemandOfServer}
	 * @description {}
	 * type {}
	 * return {}
	 */
	const startReloadOnDemandOfServer = async () => {
		try {
			let today = moment().format('YYYY-MM-DD');
			await axios.get(`/current-date/${today}`);
		} catch (error) {
			console.log(error);
		}
	};

	/**
	 * @method {checkUserIdByQueryString}
	 * @description {}
	 * type {}
	 * return {}
	 */
	const checkUserIdByQueryString = async () => {
		let token = searchParams.get('token');
		if (!_.isNil(token)) {
			try {
				let res = await axios.get(`restaurant-reservation-offline/${token}`);
				let { status } = res?.data;
				setIsOfflineReservation(status);
			} catch (error) {
				console.log(error);
			}
		}
	};

	/**
	 * @method {comboPackageOnChangeHandler}
	 * @description {}
	 * type {}
	 * return {}
	 */
	const comboPackageOnChangeHandler = (value) => {
		// if (isCustomPersonEnable === true) {
		// 	booking_formData['number_of_person'] = data?.number_of_person_custom;
		// }
		// if (isCustomChildrenEnable === true) {
		// 	booking_formData['number_of_children'] = data?.number_of_children_custom;
		// }

		// if (isCustomDriverEnable === true) {
		// 	booking_formData['number_of_drivers'] = data?.number_of_drivers_custom;
		// }

		let comboPackagePrice = value;
		let np = parseInt(getValues('number_of_person'));
		let nc = parseInt(getValues('number_of_children'));
		let nd = parseInt(getValues('number_of_drivers'));
		let total = parseInt(np + nc + nd) * parseInt(comboPackagePrice) + parseInt(hallRoomCost);
		let payable = Math.round(total / 2);
		setTotalAmount(total);
		setPayableAmount(payable);
		console.log(total, payable);
	};

	/**
	 * @method {useEffect}
	 * @description {}
	 * type {}
	 * return {}
	 */
	useEffect(() => {
		getAllFloorList();
		startReloadOnDemandOfServer();
		return () => {
			toast.dismiss();
		};
	}, []);

	/**
	 * @method {checkUserIdByQueryString}
	 * @description did mount for {isOfflineReservation}
	 * type {}
	 * return {}
	 */
	useEffect(() => {
		checkUserIdByQueryString();
	}, [searchParams]);

	if (isOfflineReservation === false) {
		return (
			<>
				<div className="container text-danger text-center py-5">
					<p className="mb-0 fs-5">
						&#8212; <var>Oops!! token number is not valid</var> &#8212;{' '}
					</p>
					<h1 className="display-2">Your are not applicable for offline reservation !!</h1>
				</div>
			</>
		);
	}
	return (
		<>
			<div id="bookingAvailabilityCheck" className="mt-4">
				<form onSubmit={handleSubmit(onSubmit)}>
					<fieldset className="border rounded mb-2 p-4">
						<legend className="w-auto fs-5 fw-bold ms-5 bg-dark text-light font-monospace px-2" style={{ marginTop: '-38px' }}>
							Check Availability
						</legend>
						<div className="row form-group mb-2 align-items-center">
							<label className="col-sm-4 fs-6 text-sm-end col-form-label"> &nbsp; </label>
							<div className="col">
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										{...register('menu_type_id', {
											onChange: (e) => {
												getBookingScheduleByMenuType(e.target.value);
												makeFloorFromGroupVisible();
												let sfID = getValues('selected_floor_id');
												!_.isUndefined(sfID) && getFloorWiseTable(sfID);
											},
										})}
										type="radio"
										name="menu_type_id"
										id="breakfast"
										value="1"
									/>
									<label className="form-check-label" htmlFor="breakfast">
										Breakfast
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										{...register('menu_type_id', {
											onChange: (e) => {
												getBookingScheduleByMenuType(e.target.value);
												makeFloorFromGroupVisible();
												let sfID = getValues('selected_floor_id');
												!_.isUndefined(sfID) && getFloorWiseTable(sfID);
											},
										})}
										type="radio"
										name="menu_type_id"
										id="lunch"
										value="2"
									/>
									<label className="form-check-label" htmlFor="lunch">
										Lunch
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input
										className="form-check-input"
										{...register('menu_type_id', {
											onChange: (e) => {
												getBookingScheduleByMenuType(e.target.value);
												makeFloorFromGroupVisible();
												let sfID = getValues('selected_floor_id');
												!_.isUndefined(sfID) && getFloorWiseTable(sfID);
											},
										})}
										type="radio"
										name="menu_type_id"
										id="dinner"
										value="3"
									/>
									<label className="form-check-label" htmlFor="dinner">
										Dinner
									</label>
								</div>
								<p className="mb-0 text-danger">{errors.menu_type_id?.message}</p>
							</div>
						</div>
						<div className="row form-group mb-2">
							<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
								Date
							</label>
							<div className="col">
								<Controller
									control={control}
									name="date"
									render={({ field }) => (
										<DatePicker
											className="form-control"
											placeholderText="Date"
											minDate={moment().toDate()}
											onChange={(date) => {
												field.onChange(date);
												makeFloorFromGroupVisible();
												let sfID = getValues('selected_floor_id');
												!_.isUndefined(sfID) && getFloorWiseTable(sfID);
												if (!_.isNull(getValues('menu_type_id')) && !_.isUndefined(getValues('menu_type_id'))) {
													getBookingScheduleByMenuType(getValues('menu_type_id'));
												}
											}}
											selected={field.value}
										/>
									)}
								/>
								<p className="mb-0 text-danger">{errors.date?.message}</p>
							</div>
						</div>
						<div className="row form-group mb-2">
							<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
								Time
							</label>
							<div className="col">
								<input
									type="text"
									{...register('time')}
									name="time"
									className={`form-control ${!_.isNull(isReservationDateAndTimeValid) && 'is-invalid'}`}
									disabled={true}
									placeholder="Time"
								/>
								<p className="mb-0 text-danger">{errors.time?.message}</p>
								{!_.isNull(isReservationDateAndTimeValid) && <p className="mb-0 text-danger">{isReservationDateAndTimeValid}</p>}
							</div>
						</div>
						<div className="row form-group mb-2">
							<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
								Number of Person
							</label>
							<div className="col">
								<input
									type="number"
									name="number_of_person_custom"
									{...register('number_of_person_custom', {
										onChange: (e) => {
											debounced();
										},
									})}
									autoFocus={isCustomPersonEnable}
									defaultValue={`11`}
									className={`form-control ${isCustomPersonEnable === false && 'd-none'}`}
									placeholder="-- Number of Person --"
								/>
								<select
									{...register('number_of_person', {
										onChange: (e) => {
											if (e.target?.value === 'custom') {
												setIsCustomPersonEnable(() => {
													setValue('number_of_person', '11');
													let sfID = getValues('selected_floor_id');
													makeFloorFromGroupVisible();
													!_.isUndefined(sfID) && getFloorWiseTable(sfID);
													return true;
												});
											} else {
												setIsCustomPersonEnable(false);
												let sfID = getValues('selected_floor_id');
												makeFloorFromGroupVisible();
												!_.isUndefined(sfID) && getFloorWiseTable(sfID);
											}
										},
									})}
									defaultValue={`-- Number of Person --`}
									className={`form-select form-control ${isCustomPersonEnable === true && 'd-none'}`}
									name="number_of_person"
									id="#"
								>
									<option defaultValue={`-- Number of Person --`} disabled={true}>
										-- Number of Person --
									</option>
									<option value="1">1</option>
									<option value="3">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
									<option value="custom">Custom</option>
								</select>
								<p className="mb-0 text-danger">{errors.number_of_person?.message}</p>
							</div>
						</div>
						<div className="row form-group mb-2">
							<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
								Number of Children
							</label>
							<div className="col">
								<input
									type="number"
									name="number_of_children_custom"
									{...register('number_of_children_custom', {
										onChange: (e) => {
											debounced();
										},
									})}
									autoFocus={isCustomChildrenEnable}
									defaultValue={`11`}
									className={`form-control ${isCustomChildrenEnable === false && 'd-none'}`}
									placeholder="-- Number of Children --"
								/>
								<select
									{...register('number_of_children', {
										onChange: (e) => {
											if (e.target?.value === 'custom') {
												setIsCustomChildrenEnable(() => {
													setValue('number_of_children', '11');
													let sfID = getValues('selected_floor_id');
													makeFloorFromGroupVisible();
													!_.isUndefined(sfID) && getFloorWiseTable(sfID);
													return true;
												});
											} else {
												setIsCustomChildrenEnable(false);
												let sfID = getValues('selected_floor_id');
												makeFloorFromGroupVisible();
												!_.isUndefined(sfID) && getFloorWiseTable(sfID);
											}
										},
									})}
									defaultValue={'0'}
									className={`form-select form-control ${isCustomChildrenEnable === true && 'd-none'}`}
									name="number_of_children"
									id="#"
								>
									<option defaultValue={'0'}>0</option>
									<option value="1">1</option>
									<option value="3">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
									<option value="custom">Custom</option>
								</select>
								<p className="mb-0 text-danger">{errors.number_of_children?.message}</p>
							</div>
						</div>
						<div className="row form-group mb-2">
							<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
								Number of Drivers
							</label>
							<div className="col">
								<input
									type="number"
									name="number_of_drivers_custom"
									{...register('number_of_drivers_custom')}
									autoFocus={isCustomDriverEnable}
									defaultValue={'11'}
									className={`form-control ${isCustomDriverEnable === false && 'd-none'}`}
									placeholder="-- Number of Drivers --"
								/>
								<select
									{...register('number_of_drivers', {
										onChange: (e) => {
											setIsCustomDriverEnable(() => {
												if (e.target?.value === 'custom') {
													setValue('number_of_drivers', '11');
													return true;
												} else {
													return false;
												}
											});
										},
									})}
									defaultValue={'0'}
									className={`form-select form-control ${isCustomDriverEnable === true && 'd-none'}`}
									name="number_of_drivers"
									id="#"
								>
									<option defaultValue={'0'}>0</option>
									<option value="1">1</option>
									<option value="3">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
									<option value="10">10</option>
									<option value="custom">Custom</option>
								</select>
								<p className="mb-0 text-danger">{errors.number_of_drivers?.message}</p>
							</div>
						</div>
						{isSelectFloorFormGroupShow === true && _.size(floorLists) > 0 && (
							<div className="row form-group mb-2">
								<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
									Select Floor/Place
								</label>
								<div className="col">
									<select
										{...register('selected_floor_id', {
											onChange: (e) => {
												getFloorWiseTable(e.target.value);
											},
										})}
										className="form-select form-control"
										name="selected_floor_id"
										defaultValue={`-- Select Floor --`}
										id="#"
									>
										<option defaultValue={`-- Select Floor --`} disabled={true}>
											-- Select Floor --
										</option>
										{floorLists.map((f) => {
											return (
												<option key={f?.id} value={f?.id}>
													{f?.name}
												</option>
											);
										})}
									</select>
									<p className="mb-0 text-danger">{errors.selected_floor_id?.message}</p>
								</div>
							</div>
						)}
						{_.isArray(floorWiseTable) && (
							<div className="row form-group mb-2">
								<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
									Availability
								</label>
								<div className="col">
									{_.size(floorWiseTable) > 0 ? (
										<div className="row gx-2">
											{floorWiseTable.map((ft) => {
												return (
													<div key={ft?.id} className="col-6">
														<div className="form-check d-block form-check-inline m-0 mb-2 p-0 position-relative">
															<input
																className={`form-check-input select-table-input position-absolute top-0 start-0 m-2 ${
																	ft?.isTotallyFree === false && 'opacity-25'
																}`}
																{...register('selected_table_id')}
																type="radio"
																name="selected_table_id"
																id={ft?.id}
																value={ft?.id}
																onClick={(e) => {
																	if (ft?.isTotallyFree === false) {
																		e.preventDefault();
																		e.stopPropagation();
																	}
																}}
															/>
															<BsPatchCheckFill
																style={{ display: 'none', zIndex: '10' }}
																className="selected-table-icon bg-white fs-5 text-success rounded-circle position-absolute top-0 start-0 m-1"
															/>
															<ReactTooltip
																class="text-center"
																id={`${ft?.id}`}
																type={ft?.isTotallyFree === false ? 'error' : 'success'}
															>
																<span className="fw-bold">
																	{ft?.isTotallyFree === false ? 'Not Available' : 'Available'}
																</span>
																<div className="info">
																	<small style={{ fontSize: '12px' }} className="d-block fw-normal">
																		Capacity: {ft?.capacity}
																	</small>
																	<small style={{ fontSize: '12px' }} className="d-block fw-normal">
																		Min Capacity: {ft?.min_capacity}
																	</small>
																</div>
															</ReactTooltip>

															{!_.isUndefined(ft?.image) ? (
																<label
																	data-tip
																	data-for={`${ft?.id}`}
																	className={`form-check-label text-light  d-block text-center border border-dark rounded p-2 ${
																		ft?.isTotallyFree === false && 'opacity-25'
																	}`}
																	style={{
																		cursor: 'pointer',
																		pointerEvents: `${ft?.isTotallyFree ? 'auto' : 'auto'}`,
																	}}
																	htmlFor={ft?.id}
																	onClick={(e) => {
																		if (ft?.isTotallyFree === false) {
																			e.preventDefault();
																			e.stopPropagation();
																		}
																	}}
																>
																	<img
																		src={`${process.env.REACT_APP_API_BACKEND_SERVER_URL}/storage/rtable/${ft?.image}`}
																		alt="img"
																		className="d-inline-block mb-2"
																		style={{ height: '40px', filter: 'invert()' }}
																	/>
																	<small style={{ fontSize: '12px' }} className="d-block">
																		<strong>Name</strong>: {ft?.name}
																	</small>
																	<small style={{ fontSize: '12px' }} className="d-block">
																		<strong>Capacity</strong>: {ft?.capacity}
																	</small>
																	<small style={{ fontSize: '12px' }} className="d-block">
																		<strong>Min Capacity</strong>: {ft?.min_capacity}
																	</small>
																</label>
															) : (
																<label className="form-check-label" htmlFor={ft?.id}>
																	{ft?.name}
																</label>
															)}
														</div>
													</div>
												);
											})}
										</div>
									) : (
										<p className="text-danger form-control mb-0 lh-base">
											There is no available table right now according to our capacity !!
										</p>
									)}
								</div>
							</div>
						)}
						{_.isArray(floorWiseTable) && floorWiseTable.some((el) => el.isTotallyFree === true) && (
							<div className="row form-group mb-2">
								<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
									Select Combo Package
								</label>
								<div className="col">
									<div className="row">
										{comboProducts.map((cp) => {
											return (
												<div key={cp?.id} className="col-6 text-center">
													<label
														htmlFor={`cp-${cp?.id}`}
														data-tip
														data-for={`pk-${cp?.id}`}
														className="food-package d-block border p-2 pt-4 rounded position-relative"
													>
														<ReactTooltip class="text-center" id={`pk-${cp?.id}`} type={'success'}>
															<strong>Name :</strong> {cp?.name}
														</ReactTooltip>
														<input
															type="radio"
															{...register('combo_package_id', {
																onChange: (e) => {
																	comboPackageOnChangeHandler(cp?.price);
																},
															})}
															value={cp?.id}
															id={`cp-${cp?.id}`}
															name="combo_package_id"
															className="food-package-input position-absolute top-0 start-0 m-2"
														/>
														<BsPatchCheckFill
															style={{ zIndex: '10' }}
															className="selected-icon bg-white fs-5 text-success rounded-circle position-absolute top-0 start-0 m-1"
														/>
														<span className="package-text d-block mt-1">{cp?.name}</span>
														<span className="Price d-block">Price : {cp?.price}</span>
													</label>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						)}

						<div className="row form-group mb-2">
							<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
								Total
							</label>
							<div className="col">
								<p className={`mb-0 form-control border-0`}>
									<strong> {totalAmount} </strong>
								</p>
							</div>
						</div>

						<div className="row form-group mb-2">
							<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
								Payable <br /> <small>(50% of total)</small>
							</label>
							<div className="col">
								<p className={`mb-0 form-control border-0`}>
									<strong> {payableAmount} </strong>
								</p>
							</div>
						</div>
					</fieldset>

					{_.isArray(floorWiseTable) && floorWiseTable.some((el) => el.isTotallyFree === true) && (
						<fieldset className="border rounded my-4 p-4">
							<legend
								className="w-auto fs-4 fw-bold ms-5 bg-dark rounded text-light font-monospace px-2"
								style={{ marginTop: '-42px' }}
							>
								Billing Information
							</legend>
							<div className="row form-group mb-2">
								<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
									Full Name
								</label>
								<div className="col">
									<input type="text" {...register('full_name')} name="full_name" className="form-control" placeholder="Full Name" />
									<p className="mb-0 text-danger">{errors.full_name?.message}</p>
								</div>
							</div>
							<div className="row form-group mb-2">
								<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
									Contact Number
								</label>
								<div className="col">
									<input
										type="text"
										{...register('contact_number')}
										name="contact_number"
										className="form-control"
										placeholder="Contact Number"
									/>
									<p className="mb-0 text-danger">{errors.contact_number?.message}</p>
								</div>
							</div>
							<div className="row form-group mb-2">
								<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
									Email
								</label>
								<div className="col">
									<input type="email" {...register('email')} name="email" className="form-control" placeholder="Email" />
									<p className="mb-0 text-danger">{errors.email?.message}</p>
								</div>
							</div>
							<div className="row form-group mb-2">
								<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label">
									Address
								</label>
								<div className="col">
									<textarea
										{...register('address')}
										rows="4"
										name="address"
										className="form-control"
										placeholder="Describe your address here..."
									></textarea>
									<p className="mb-0 text-danger">{errors.address?.message}</p>
								</div>
							</div>

							<div className="row form-group mb-2">
								<label htmlFor="#" className="col-sm-4 fs-6 text-sm-end col-form-label"></label>
								<div className="col">
									<div className="row">
										<div className="form-group">
											<Link className="text-decoration-none" to="/hotel-resort-policy">
												IHR Event, Banquette & Catering Terms & Conditions
											</Link>
											{/* <button type="submit" className="btn btn-sm btn-primary px-3">
												Make Payment
											</button> */}
										</div>
									</div>
								</div>
							</div>
						</fieldset>
					)}
					<div className="row form-group mt-0">
						<div className="col pt-2">
							<h5 className="font-monospace border-bottom pb-1 fw-bold mb-2">Contact For Booking</h5>
							<p className="mb-0">
								Phone :{' '}
								<a className="text-decoration-none" href="tel:++8809612788788">
									+88 09612-788788
								</a>
							</p>
							<p className="mb-0">
								Email :{' '}
								<a className="text-decoration-none" href="mailto:reservation@insignia-resorts.net">
									reservation@insignia-resorts.net
								</a>
							</p>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default BookingAvailabilityCheck;

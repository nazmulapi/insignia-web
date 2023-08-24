import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import PagerBannerForRestaurantReservation from "../components/PageBanner/PagerBannerForRestaurantReservation";

export default class Terms extends Component {
    render() {
        return (
            <>
                <PagerBannerForRestaurantReservation
                    minusTop={true}
                    title="IHR Event, Banquette & Catering Terms & Conditions"
                    background={
                        "https://img.freepik.com/premium-photo/cabinet-tv-white-plaster-wall-living-room-with-armchair-minimal-design-3d-rendering_41470-3003.jpg?w=2000"
                    }
                />
                <div className="policy py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 text-light mx-auto">
                                <h3 className="display-5 mb-4">IHR Event, Banquette & Catering Terms & Conditions</h3>
                                <h5 className="	 mb-2">SECURITY MONEY:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    <ul>
                                        <li className="mb-2">
                                            Private/Social Events, Programs - Tk.1,00,000/- (Taka One Lakh Only)
                                        </li>
                                        <li className="mb-2">
                                            Public Events/Programs - Tk.1,50,000/- (Taka One Lakh Fifty Thousand Only)
                                        </li>
                                        <li className="mb-2">
                                            Corporate & Other Events/Programs - Tk.2,00,000/- (Taka Two Lakh Only)
                                        </li>
                                        <li className="mb-2">The above amounts are for a day only.</li>
                                        <li className="mb-2">
                                            Security deposits will be calculated for multiple days @ the respective
                                            rates x days.
                                        </li>
                                        <li className="mb-2">
                                            Security money will be refunded/adjusted within 10 work days after the
                                            event/program.
                                        </li>
                                        <li className="mb-2">
                                            Original copy of Money Receipts to be shown to the Hotel accounts department
                                            in order to get back the security money.
                                        </li>
                                    </ul>
                                </p>
                                <h5 className="mt-3">VENUE CONFIRMATION PAYMENT MODALITY:</h5>
                                <p className="mb-0 fs-6 lh-base mb-2">
                                    <ul>
                                        <li>
                                            30% advance of the contracted & agreed amount after receiving the offer
                                            within the cut-off date mentioned in the offer.
                                        </li>
                                        <li className="mb-2">45% payment 25 days prior to the event.</li>
                                        <li className="mb-2">
                                            Balance of 25% payment must be made at least 15 days prior to the event.
                                        </li>
                                        <li className="mb-2">
                                            For social/private events (e.g.: weddings, birthdays, haluds, mehndi nights,
                                            etc;) all payments must be made by cash deposits to our designated account.
                                        </li>
                                        <li className="mb-2">
                                            In case of musical events, 70% of total venue rent to be paid as advance at
                                            the time of booking & rest of the amount to be paid at least 15 days prior
                                            to the event/ program.
                                        </li>
                                        <li className="mb-2">
                                            VAT challan for food to be submitted to Hotel authority seven (07) days
                                            prior to the event/ program.
                                        </li>
                                        <li className="mb-2">
                                            Booking will be considered confirmed and date will be blocked for the
                                            event/program only after the hotel has received the contracted amount in
                                            full, pre-requisite documents and the signed contract.
                                        </li>
                                    </ul>
                                </p>
                                <h5 className="mt-3">CANCELLATION, CHANGE, SWAP & POSTPONEMENT CHARGES:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    <table class="table table-bordered text-light">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-center">
                                                    Time Frame
                                                </th>
                                                <th scope="col" className="text-center">
                                                    Cancellation
                                                </th>
                                                <th scope="col" className="text-center">
                                                    Change/Swap/Postpone
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >06 Weeks prior to the event</td>
                                                <td>No Charge</td>
                                                <td>No Charge</td>
                                            </tr>
                                            <tr>
                                                <td >Less than 21 days of the event date</td>
                                                <td>25%</td>
                                                <td>10%</td>
                                            </tr>
                                            <tr>
                                                <td >Less than 14 days of the event date</td>
                                                <td>50%</td>
                                                <td>15%</td>
                                            </tr>
                                            <tr>
                                                <td >Less than 07 days of the event date</td>
                                                <td>75%</td>
                                                <td>20%</td>
                                            </tr>
                                            <tr>
                                                <td >Less than 72 hours</td>
                                                <td>100%</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </p>

                                <h5 className="mt-5">DOCUMENTS:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    <ul>
                                        <li className="mb-2">
                                            The client/s has to provide document/s (Photocopies of: NID/Passport/Trade
                                            License/Business Card, etc.) at the time of booking for Identification.
                                        </li>
                                        <li className="mb-2">
                                            Clients will have to submit original documents (as and when applicable)
                                            e.g.: NOC from NBR, clearance from Ministry of Commerce, clearance from
                                            Ministry of Cultural Affairs, Police Permission Involving local police
                                            station, five (05) days prior to the program/ event.
                                        </li>
                                    </ul>
                                </p>

                                <h5 className="mt-3">CODE OF CONDUCT:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    <ul>
                                        <li className="mb-2">
                                            The Client should conduct their activity/ies in such a manner that it is in
                                            conjunction with the applicable laws of the land.
                                        </li>
                                        <li className="mb-2">Fireworks are restricted throughout Insignia property.</li>
                                        <li className="mb-2">
                                            Only chopped meat, fish, chicken, etc., are allowed from outside in the
                                            outdoor kitchen of the Hotel.
                                        </li>
                                        <li className="mb-2">NO ALCOHOLIC BEVERAGES ARE ALLOWED IN THE PREMISES</li>
                                        <li className="mb-2">
                                            SMOKING IS NOT ALLOWED ANYWHERE IN THE PREMISES EXCEPT DESIGNATED OUTDOOR
                                            SMOKING AREA.
                                        </li>
                                    </ul>
                                </p>

                                <h5 className="mt-3">COMPLIANCE:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    If the client is unable to comply with any: a) Financial Issues, b) Documents or c)
                                    any other code of conduct, Insignia Hotels & Resorts authority reserves the right to
                                    cancel the program and the deposited money will be adjusted as per the rules &
                                    regulations of Insignia Hotels & Resorts authority for such cases.
                                </p>

                                <h5 className="mt-3">FORCE MAJEURE INDEMNIFICATION:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    If for any reason beyond its control, including strikes, labor disputes, accidents,
                                    government requisition, restrictions of regulations on travel, business operation,
                                    political disturbances, acts of war, acts of God, the Insignia Hotel & Resort is
                                    unable to perform its obligation under this agreement and may terminate this
                                    agreement. In this sort of case, Insignia Hotels & Resorts will not be liable for
                                    any damages caused as a result of the termination. Client/s will hold Insignia
                                    Hotels & Resorts indemnified and hold harmless its owners, administrators,
                                    executors, successors, assigns, agents, officers, and employees immune from any sort
                                    of legal, technical & financial liabilities that may arise from the termination. Any
                                    sort of liabilities arising from the termination/cancellation shall be solely borne
                                    by the Client/s.
                                </p>

                                <h5 className="mt-3">DAMAGES:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    The client will be held responsible and must compensate for the damages/breakages
                                    either to the venue, materials or any other part of the property/ies of the Hotel &
                                    Resort, caused by the client’s guests, invitees or client’s appointed service
                                    provider/s, contractors or event management firm/s.
                                </p>

                                <h5 className="mt-3">SAFETY REGULATIONS:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    The client must act in accordance with the Insignia’s safety and security
                                    regulations.
                                </p>

                                <h5 className="mt-3">MENU SELECTION:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    Menu will be selected a minimum of 7 working days prior to the event date. Our
                                    printed menu selections are recommended. For special occasions, we can tailor the
                                    menu to suit your specific needs. All food and beverage items will be provided by
                                    Insignia Hotels and Resorts.
                                    <br />
                                    <br />
                                    An Increase of 15 % charge will apply on food, if the number of PAX increases 06
                                    hours prior to the event. This increased charge will be imposed only on those
                                    additional PAX which were not forecasted.
                                </p>

                                <h5 className="mt-3">EVENT PREPARATION LEAD TIME MEETING:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    Preparation Lead Time Meeting (PLT) is where our F&B, Operations team, event
                                    management firm, caterer (if any) & client have a complete discussion about the
                                    event. In this meeting the Prior Preparation Hours for the event will be decided by
                                    the concerned participants. The minutes of the meeting will be recorded/noted. The
                                    decisions/requirements (within allowable parameters and scope) stated in this
                                    meeting will be final. No changes can be made after this meeting. The meeting needs
                                    to be arranged 5-7 days prior to the event.
                                    <br />
                                    <br />
                                    Full Payments must be cleared before the meeting and proof of which must be shown
                                    and shared with all the departments/participants in the PLT meeting.
                                    <br />
                                    <br />
                                    Note: reminder reference that Event will be canceled as per payment modality, if it
                                    is not fully paid 15 days prior to the event.
                                </p>

                                <h5 className="mt-3">CONDITIONS:</h5>
                                <p className="mb-0 fs-6 lh-base ">
                                    <ol>
                                        <li className="mb-2">
                                            Rates mentioned are applicable only for the respective event and on the
                                            date/s mentioned in the proposal.
                                        </li>
                                        <li className="mb-2">
                                            If payment is not made as per the above clause/s, Insignia Hotels & Resorts
                                            reserves the right to cancel the contract, event, program and release the
                                            booked date/s.
                                        </li>
                                        <li className="mb-2">
                                            All disputes will be settled subject to the jurisdiction of Bangladesh
                                            Courts as per the Laws prevalent in Bangladesh at the time of
                                            correspondence.
                                        </li>
                                        <li className="mb-2">
                                            All government policies/regulations prevalent during the time of your event
                                            will apply. Insignia Hotels & Resorts will not be held responsible for any
                                            subsequent changes in the Government policies, rules and/or regulations
                                            which will/may have a bearing on the Terms and Conditions of our agreement.
                                            In such an event, the Terms and Conditions mentioned herein in this contract
                                            will remain valid.
                                        </li>
                                        <li className="mb-2">
                                            NO halogen lights are allowed in the venue, all lights used has to be LED
                                        </li>
                                        <li className="mb-2">
                                            Backdrops & Decorations: All wood work, paint work etc. are to be
                                            constructed and completed at the contractor’s workshop and are only put
                                            together at the hotel. The layout of the event has to be presented to the
                                            hotel and pre-authorised by the hotel Management/Engineering Department.
                                        </li>
                                        <li className="mb-2">
                                            The client is liable for any expenses incurred in restoring the hotel
                                            property to its original condition should there be any damage caused to the
                                            hotel, whether caused by the client or the client’s contractor, event
                                            management firms or guests.
                                        </li>
                                        <li className="mb-2">
                                            The client is liable for the removal/disposal of any props or materials used
                                            during the event. Right after the conclusion of the event if the
                                            materials/props are not removed, the hotel reserves the right to dispose of
                                            any item(s) and the client will bear all costs involved in doing so.
                                        </li>
                                        <li className="mb-2">
                                            The use of nails, screws or hooks in any area of the hotel is not permitted.
                                            No tape may be used on the floor/s (unless otherwise authorized by the
                                            hotel), ceiling or walls.
                                        </li>
                                        <li className="mb-2">
                                            Smoking: Under no circumstances smoking will be allowed in any of the
                                            buildings. There will be a designated outdoor area where smoking will be
                                            allowed.
                                        </li>
                                        <li className="mb-2">
                                            Safety & Security: The client will be responsible to maintain safety and
                                            security within the venue. The overall security will be supervised by the
                                            Insignia Hotels & Resorts team.
                                        </li>
                                        <li className="mb-2">
                                            Admittance: Insignia Hotels & Resorts reserves the right to deny any person
                                            admission to the venue.
                                        </li>
                                        <li className="mb-2">
                                            Illegal Activities: Should it be suspected that an event might bring the
                                            hotel into disrepute and/or if it is suspected that illegal activities might
                                            take place, hotel management reserves the right to cancel the event at any
                                            time without prior notice. Any deposit already received by the hotel will be
                                            forfeited.
                                        </li>
                                        <li className="mb-2">
                                            Removal of any hotel property, Insignia Hotels & Resorts reserves the right
                                            to charge the cost to the client.
                                        </li>
                                        <li className="mb-2">
                                            Fire exits and escape routes must not be blocked under any circumstances and
                                            at any time.
                                        </li>
                                        <li className="mb-2">
                                            Solicitation of products, other than required for the event, and the sales
                                            of any items must be approved in writing by the hotel.
                                        </li>
                                        <li className="mb-2">
                                            Heavy equipment is not allowed within the premises without authorization
                                            from the management of the hotel. If approval is given, the host is
                                            responsible for protecting all floors, floor coverings, door frames and all
                                            other fixtures of the hotel.
                                        </li>
                                        <li className="mb-2">
                                            For equipment brought to the hotel which require electricity and/or water
                                            and therefore also drainage, the Chief Engineer of the hotel has to be
                                            consulted and must give his approval to do so. He will equally have to
                                            approve the contractor doing such work. Water and electricity will be
                                            metered and installation fees for extra cabling and distribution boards or
                                            water and drainage hoses will be borne by the client.
                                        </li>
                                        <li className="mb-2">
                                            No food and beverages of any kind is permitted to be brought into the hotel
                                            premises without prior approval from the hotel management.
                                        </li>
                                        <li className="mb-2">
                                            The hotel does not allows any cooking to be carried out by the guests or
                                            their caterer in the banquet hall, Ballroom, Function rooms and in the
                                            kitchen
                                        </li>
                                        <li className="mb-2">
                                            The tampering with the connections or the removal of any part of the hotel’s
                                            electrical and / or the firm’s alarm/sprinklers system is strictly
                                            forbidden.
                                        </li>
                                        <li className="mb-2">
                                            Animals are prohibited in any part of the hotel. The use of flammables,
                                            explosive, toxic or otherwise harmful substances within the hotel premises
                                            is strictly prohibited.
                                        </li>
                                        <li className="mb-2">
                                            Any use of “Insignia Hotels & Resorts” logo or name for advertising purpose
                                            must be done with approval of the hotel management with approved logo.
                                        </li>
                                        <li className="mb-2">
                                            Insignia Hotels & Resorts is not responsible for the security of any items
                                            left on the premises overnight or during periods when no representatives of
                                            the client are present.
                                        </li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

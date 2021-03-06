
const BaseModel = require("./basemodel");
class Hos extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				beds: {name: 'beds', type:Sequelize.DECIMAL},
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				contact: {name: 'contact', type:Sequelize.DECIMAL},
				hid: {name: 'hid', type:Sequelize.INTEGER},
				area: {name: 'area', type:Sequelize.STRING},
				avg_patients: {name: 'avg_patients', type:Sequelize.STRING},
				branches: {name: 'branches', type:Sequelize.STRING},
				city: {name: 'city', type:Sequelize.STRING},
				createdat: {name: 'createdAt', type:Sequelize.STRING},
				discount_rate: {name: 'discount_rate', type:Sequelize.STRING},
				district: {name: 'district', type:Sequelize.STRING},
				email: {name: 'email', type:Sequelize.STRING},
				emergency_service: {name: 'emergency_service', type:Sequelize.STRING},
				icu_beds: {name: 'icu_beds', type:Sequelize.STRING},
				insurance_accepted: {name: 'insurance_accepted', type:Sequelize.STRING},
				latitude: {name: 'latitude', type:Sequelize.STRING},
				logo: {name: 'logo', type:Sequelize.STRING},
				longitude: {name: 'longitude', type:Sequelize.STRING},
				medical_tourism_accepted: {name: 'medical_tourism_accepted', type:Sequelize.STRING},
				medical_tourism_rate: {name: 'medical_tourism_rate', type:Sequelize.STRING},
				name: {name: 'name', type:Sequelize.STRING},
				ownership: {name: 'ownership', type:Sequelize.STRING},
				password: {name: 'password', type:Sequelize.STRING},
				patients_per_day: {name: 'patients_per_day', type:Sequelize.STRING},
				payment_id: {name: 'payment_id', type:Sequelize.STRING},
				pincode: {name: 'pincode', type:Sequelize.STRING},
				referral_rate: {name: 'referral_rate', type:Sequelize.STRING},
				registration_no: {name: 'registration_no', type:Sequelize.STRING},
				rohini_id: {name: 'rohini_id', type:Sequelize.STRING},
				staff: {name: 'staff', type:Sequelize.STRING},
				state: {name: 'state', type:Sequelize.STRING},
				status: {name: 'status', type:Sequelize.STRING},
				tagline: {name: 'tagline', type:Sequelize.STRING},
				type: {name: 'type', type:Sequelize.STRING},
				url: {name: 'url', type:Sequelize.STRING},
				ventilator_beds: {name: 'ventilator_beds', type:Sequelize.STRING},
				website: {name: 'website', type:Sequelize.STRING},
				tv_installed: {name: 'tv_installed', type:Sequelize.STRING},
				about: {name: 'about', type:Sequelize.STRING},
				accreditation: {name: 'accreditation', type:Sequelize.STRING},
				address: {name: 'address', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				schema: "public", 
				tableName: "hos",
				modelName: "hos",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'beds', 
			sequelize.literal('ID AS id'), 
			'contact', 
			'hid', 
			'area', 
			'avg_patients', 
			'branches', 
			'city', 
			sequelize.literal('createdAt AS createdat'), 
			'discount_rate', 
			'district', 
			'email', 
			'emergency_service', 
			'icu_beds', 
			'insurance_accepted', 
			'latitude', 
			'logo', 
			'longitude', 
			'medical_tourism_accepted', 
			'medical_tourism_rate', 
			'name', 
			'ownership', 
			'patients_per_day', 
			'payment_id', 
			'pincode', 
			'referral_rate', 
			'registration_no', 
			'rohini_id', 
			'staff', 
			'state', 
			'status', 
			'tagline', 
			'type', 
			'url', 
			'ventilator_beds', 
			'website', 
			'tv_installed', 
			'about', 
			'accreditation', 
			'address'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'beds', 
			sequelize.literal('ID AS id'), 
			'contact', 
			'hid', 
			'area', 
			'avg_patients', 
			'branches', 
			'city', 
			sequelize.literal('createdAt AS createdat'), 
			'discount_rate', 
			'district', 
			'email', 
			'emergency_service', 
			'icu_beds', 
			'insurance_accepted', 
			'latitude', 
			'logo', 
			'longitude', 
			'medical_tourism_accepted', 
			'medical_tourism_rate', 
			'name', 
			'ownership', 
			'patients_per_day', 
			'payment_id', 
			'pincode', 
			'referral_rate', 
			'registration_no', 
			'rohini_id', 
			'staff', 
			'state', 
			'status', 
			'tagline', 
			'type', 
			'url', 
			'ventilator_beds', 
			'website', 
			'tv_installed', 
			'about', 
			'accreditation', 
			'address'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'beds', 
			sequelize.literal('ID AS id'), 
			'contact', 
			'hid', 
			'area', 
			'avg_patients', 
			'branches', 
			'city', 
			sequelize.literal('createdAt AS createdat'), 
			'discount_rate', 
			'district', 
			'email', 
			'emergency_service', 
			'icu_beds', 
			'insurance_accepted', 
			'latitude', 
			'logo', 
			'longitude', 
			'medical_tourism_accepted', 
			'medical_tourism_rate', 
			'name', 
			'ownership', 
			'patients_per_day', 
			'payment_id', 
			'pincode', 
			'referral_rate', 
			'registration_no', 
			'rohini_id', 
			'staff', 
			'state', 
			'status', 
			'tagline', 
			'type', 
			'url', 
			'ventilator_beds', 
			'website', 
			'tv_installed', 
			'about', 
			'accreditation', 
			'address'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'beds', 
			sequelize.literal('ID AS id'), 
			'contact', 
			'hid', 
			'area', 
			'avg_patients', 
			'branches', 
			'city', 
			sequelize.literal('createdAt AS createdat'), 
			'discount_rate', 
			'district', 
			'email', 
			'emergency_service', 
			'icu_beds', 
			'insurance_accepted', 
			'latitude', 
			'logo', 
			'longitude', 
			'medical_tourism_accepted', 
			'medical_tourism_rate', 
			'name', 
			'ownership', 
			'patients_per_day', 
			'payment_id', 
			'pincode', 
			'referral_rate', 
			'registration_no', 
			'rohini_id', 
			'staff', 
			'state', 
			'status', 
			'tagline', 
			'type', 
			'url', 
			'ventilator_beds', 
			'website', 
			'tv_installed', 
			'about', 
			'accreditation', 
			'address'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'beds', 
			sequelize.literal('ID AS id'), 
			'contact', 
			'hid', 
			'area', 
			'avg_patients', 
			'branches', 
			'city', 
			sequelize.literal('createdAt AS createdat'), 
			'discount_rate', 
			'district', 
			'email', 
			'emergency_service', 
			'icu_beds', 
			'insurance_accepted', 
			'latitude', 
			'logo', 
			'longitude', 
			'medical_tourism_accepted', 
			'medical_tourism_rate', 
			'name', 
			'ownership', 
			'patients_per_day', 
			'payment_id', 
			'pincode', 
			'referral_rate', 
			'registration_no', 
			'rohini_id', 
			'staff', 
			'state', 
			'status', 
			'tagline', 
			'type', 
			'url', 
			'ventilator_beds', 
			'website', 
			'tv_installed', 
			'about', 
			'accreditation', 
			'address'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("area iLIKE :search"), 
			sequelize.literal("avg_patients iLIKE :search"), 
			sequelize.literal("branches iLIKE :search"), 
			sequelize.literal("city iLIKE :search"), 
			sequelize.literal("createdAt iLIKE :search"), 
			sequelize.literal("discount_rate iLIKE :search"), 
			sequelize.literal("district iLIKE :search"), 
			sequelize.literal("email iLIKE :search"), 
			sequelize.literal("emergency_service iLIKE :search"), 
			sequelize.literal("icu_beds iLIKE :search"), 
			sequelize.literal("insurance_accepted iLIKE :search"), 
			sequelize.literal("latitude iLIKE :search"), 
			sequelize.literal("logo iLIKE :search"), 
			sequelize.literal("longitude iLIKE :search"), 
			sequelize.literal("medical_tourism_accepted iLIKE :search"), 
			sequelize.literal("medical_tourism_rate iLIKE :search"), 
			sequelize.literal("name iLIKE :search"), 
			sequelize.literal("ownership iLIKE :search"), 
			sequelize.literal("password iLIKE :search"), 
			sequelize.literal("patients_per_day iLIKE :search"), 
			sequelize.literal("pincode iLIKE :search"), 
			sequelize.literal("referral_rate iLIKE :search"), 
			sequelize.literal("registration_no iLIKE :search"), 
			sequelize.literal("staff iLIKE :search"), 
			sequelize.literal("state iLIKE :search"), 
			sequelize.literal("status iLIKE :search"), 
			sequelize.literal("tagline iLIKE :search"), 
			sequelize.literal("type iLIKE :search"), 
			sequelize.literal("url iLIKE :search"), 
			sequelize.literal("ventilator_beds iLIKE :search"), 
			sequelize.literal("website iLIKE :search"), 
			sequelize.literal("tv_installed iLIKE :search"), 
			sequelize.literal("about iLIKE :search"), 
			sequelize.literal("accreditation iLIKE :search"), 
			sequelize.literal("address iLIKE :search"),
		];
	}

	
	
}
module.exports = Hos;

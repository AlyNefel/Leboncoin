import mongoose, { Schema, model, models } from 'mongoose';

const RoomSchema = new Schema({
  name: {
    en: String,
    fr: String,
    ar: String,
  },
  description: {
    en: String,
    fr: String,
    ar: String,
  },
  price: Number,
  capacity: Number,
  images: [String],
  amenities: [String],
  type: {
    type: String,
    enum: ['single', 'double', 'suite', 'deluxe'],
    default: 'single',
  },
});

export const Room = models.Room || model('Room', RoomSchema);

const ReservationSchema = new Schema({
  roomId: { type: Schema.Types.ObjectId, ref: 'Room' },
  customerName: String,
  customerEmail: String,
  checkIn: Date,
  checkOut: Date,
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
  createdAt: { type: Date, default: Date.now },
});

export const Reservation = models.Reservation || model('Reservation', ReservationSchema);

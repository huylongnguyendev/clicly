import "dotenv/config"

export const JwtConstant = {
  secret: process.env.ACCESS_SECRET,
  refresh: process.env.REFRESH_SECRET,
  age: 5 * 60 * 1000
}

export const ENV = process.env.NODE_ENV === "production"
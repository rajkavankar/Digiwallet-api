import crypto from "crypto"
import { config } from "../config/config.ts"

interface OtpServiceInterface {
  ttl: number
  getOtp: () => Promise<number>
  hashData: (data: string) => string
  isValidOtp: (hashdedData: string, data: string) => boolean
}

class OtpService implements OtpServiceInterface {
  ttl = 1000 * 60 * 5 //5 mins

  async getOtp() {
    const otp = crypto.randomInt(1000, 9999)
    return otp
  }

  hashData(data: string) {
    return crypto
      .createHmac("SHA256", config.OTP_HASH)
      .update(data)
      .digest("hex")
  }

  isValidOtp(hashdedData: string, data: string) {
    const computedHash = this.hashData(data)

    if (computedHash === hashdedData) {
      return true
    } else {
      return false
    }
  }
}

export default new OtpService()

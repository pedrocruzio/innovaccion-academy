export default class ApiResponseHandler {
  static async success(req, res, payload) {
    if (payload !== undefined) {
      res.status(200).json({
        success: true,
        payload,
      })
    } else {
      res.status(500).json({
        success: false,
        error: 'Payload Undefined',
      })
    }
  }

  static async error(req, res, error) {
    if (error && [400, 401, 403, 404].includes(error.code)) {
      console.error(error)
      res.status(error.code).json({ success: false, error: error.message })
    } else {
      console.error(error)
      res.status(500).json({ success: false, error: 'Internal Server Error' })
    }
  }
}

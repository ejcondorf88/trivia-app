import axios from "axios";
export class Question {
  constructor() {
    this.api = "https://opentdb.com/api.php?amount=10";
  }

  async getQuestions() {
    const response = await axios.get(this.api);
    return response.data.results;
  }
}

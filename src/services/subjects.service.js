import http from "@/utils/http.js";

class SubjectsService {
    async getSubjects () {
        return await http.get('get-subjects').then(response => response.data)
    }

    async getSubjectTopics (id) {
        return await http.get(`get-subject-topics/${id}`).then(response => response.data)
    }

    async getSubjectContents (id) {
        return await http.get(`get-subject-contents/${id}`).then(response => response.data)
    }

    async getTopicContents (id) {
        return await http.get(`get-topic-contents/${id}`).then(response => response.data)
    }

}

export default new SubjectsService()
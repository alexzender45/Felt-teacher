import { BaseController } from '.';
import Teacher from '../model/teacher.model';
import { throwError } from '../utils/handleErrors';

export class TeacherController extends BaseController {
  constructor() {
    super();
  }

  async register(req, res) {
    try {
      const data = req.body;

      if (req.file) {
        data.image = req.file.path;
      }

      
      const newTeacher = new Teacher(data);
      const teacher = await newTeacher.save();
      const token = await teacher.generateAuthToken();
      const body = { teacher, token };

      super.success(res, body, 'Teacher Registration Successful', 201);
    } catch (e) {
      super.error(res, e);
    }
  }

  async login(req, res) {
    try {
      const { email, password} = req.body;
      console.log(email)
      console.log(password)
      const teacher = await Teacher.findByCredentials(email, password);
      const token = await teacher.generateAuthToken();
      const body = { teacher, token };

      super.success(res, body, 'Login Successful');
    } catch (e) {
      console.log(e)
      super.error(res, e);
    }
  }

  async logOut(req, res) {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token;
      });

      await req.user.save();

      super.success(res, [], 'Logout Successful');
    } catch (e) {
      super.error(res, e);
    }
  }

  async readAll(req, res) {
    try {
      const teachers = await Teacher.find({});

      super.success(res, teachers || [], 'Successfully Retrieved all Teachers.');
    } catch (e) {
      super.error(res, e);
    }
  }

  async approvedTeachersInEnglishAndMathmaticsAndBiology(req, res) {
    try {
      const teachers = await Teacher.find({ approved: true, $or:[{intrested_subject : 'English'}, {intrested_subject : 'Biology'}, {intrested_subject : 'Mathematics'}] });

      super.success(res, teachers || [], 'Successfully Retrieved all Teachers.');
    } catch (e) {
      super.error(res, e);
    }
  }

  async approvedTeachersInPhysicsAndChemistryAndGeography(req, res) {
    try {
      const teachers = await Teacher.find({ approved: true, $or:[{intrested_subject : 'Physics'}, {intrested_subject : 'Chemistry'}, {intrested_subject : 'Geography'}] });

      super.success(res, teachers || [], 'Successfully Retrieved all Teachers.');
    } catch (e) {
      super.error(res, e);
    }
  }

  async approvedTeachersInCommerceAndGovernmentAndAccount(req, res) {
    try {
      const teachers = await Teacher.find({ approved: true, $or:[{intrested_subject : 'Commerce'}, {intrested_subject : 'Government'}, {intrested_subject : 'Account'}] });

      super.success(res, teachers || [], 'Successfully Retrieved all Teachers.');
    } catch (e) {
      super.error(res, e);
    }
  }
  async approvedTeachersInEnglishLitratureAndCrkAndEconomics(req, res) {
    try {
      const teachers = await Teacher.find({ approved: true, $or:[{intrested_subject : 'EnglishLitrature'}, {intrested_subject : 'Crk'}, {intrested_subject : 'Economics'}] });

      super.success(res, teachers || [], 'Successfully Retrieved all Teachers.');
    } catch (e) {
      super.error(res, e);
    }
  }

  async approvedTeachersInIrkAndCivicEducationAndHistory(req, res) {
    try {
      const teachers = await Teacher.find({ approved: true, $or:[{intrested_subject : 'Irk'}, {intrested_subject : 'CivicEducation'}, {intrested_subject : 'History'}] });

      super.success(res, teachers || [], 'Successfully Retrieved all Teachers.');
    } catch (e) {
      super.error(res, e);
    }
  }
  async deleteAll(req, res) {
    try {
      await Teacher.deleteMany({});

      super.success(res, [], 'Delete Successful.');
    } catch (e) {
      super.error(res, e);
    }
  }

  async readOne(req, res) {
    try {
      super.success(res, req.user, 'Successfully Retrieved Users Profile.');
    } catch (e) {
      super.error(res, e);
    }
  }
//
async adminApprovedTeachers(req, res) {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      'approved'
    ];
    const isValidUpdate = updates.every((update) => {
      return allowedUpdates.includes(update);
    });

    if (!isValidUpdate) {
      throwError(400, 'Invalid Field.');
    }

    const teacherUpdate = req.body;

    updates.map((update) => {
      req.user[update] = teacherUpdate[update];
    });

    if (req.file) {
      req.user.image = req.file.path;
    }
    const updatedTeacher = await req.user.save();
    super.success(res, updatedTeacher, 'Update Successful');
  } catch (e) {
    super.error(res, e);
  }
}

  async update(req, res) {
    try {
      const updates = Object.keys(req.body);
      const allowedUpdates = [
        'phone',
        'fullname',
        'username',
        'email',
        'password',
        'yearsOfExperience',
        'school',
        'levelOfEducation',
        'courseOfStudy',
        'gpa',
        'dateOfBirth',
        'image',
        'state',
        'country',
        'intrested_subject',
        'address',
        'approved',
        'about',
        'role'
      ];
      const isValidUpdate = updates.every((update) => {
        return allowedUpdates.includes(update);
      });

      if (!isValidUpdate) {
        throwError(400, 'Invalid Field.');
      }

      const teacherUpdate = req.body;

      updates.map((update) => {
        req.user[update] = teacherUpdate[update];
      });

      if (req.file) {
        req.user.image = req.file.path;
      }
      const updatedTeacher = await req.user.save();
      super.success(res, updatedTeacher, 'Update Successful');
    } catch (e) {
      super.error(res, e);
    }
  }

  async deleteOne(req, res) {
    try {
      const teacher = await req.user.remove();

      super.success(res, teacher, 'Delete Successful');
    } catch (e) {
      super.error(res, e);
    }
  }
}

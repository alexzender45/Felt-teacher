import { Router } from 'express';
import { TeacherController } from '../../controllers/teacher';
import { authenticate, permit } from '../../middleware';

const router = Router();
const { 
  login, 
  logOut, 
  deleteAll, 
  deleteOne, 
  readAll, 
  fetchOne, 
  register,
  cancel,
   update, 
   adminApprovedTeachers,
   verifyUser,
   approvedTeachersInEnglish,
   approvedTeachersInMathematics,
   approvedTeachersInBiology,
   approvedTeachersInCommerce,
   approvedTeachersInGovernment,
   approvedTeachersInEnglishLiterature,
   approvedTeachersInChristianReligiousStudies,
   approvedTeachersInHistory,
   approvedTeachersInCivicEducation,
   approvedTeachersInIslamicReligiousStudies,
   approvedTeachersInPhysics,
   approvedTeachersInGeography,
   approvedTeachersInChemistry,
   approvedTeachersInAccount,
   approvedTeachersInEconomics,
   approvedTeachersForPrimary,
   approvedTeachersForJuniorSecondary
 } = new TeacherController();
//
router.route('/login').post(login);
router.route('/logout').get(authenticate, logOut);
router.route('/verify').post(verifyUser)
router.route('/cancel').post(cancel)
router
  .route('/teachers')
  .get(authenticate, permit(['admin']), readAll)
  .post(register)
  .delete(authenticate, permit(['admin']), deleteAll);

  router.route('/teachers/Mathematics')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInMathematics)

  router.route('/teachers/English')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInEnglish)

  router.route('/teachers/Biology')
  .get(authenticate, permit(['admin', 'user', 'school', 'parent']), approvedTeachersInBiology)

  router.route('/teachers/Commerce')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInCommerce)

  router.route('/teachers/Government')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInGovernment)

  router.route('/teachers/EnglishLiterature')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInEnglishLiterature)

  router.route('/teachers/History')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInHistory)

  router.route('/teachers/CivicEducation')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInCivicEducation)

  router.route('/teachers/IslamicReligiousStudies')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInIslamicReligiousStudies)

  router.route('/teachers/ChristianReligiousStudies')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInChristianReligiousStudies)

  router.route('/teachers/Physics')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInPhysics)

  router.route('/teachers/Geography')
  .get( authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInGeography)

  router.route('/teachers/Chemistry')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']), approvedTeachersInChemistry)

  router.route('/teachers/Account')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInAccount)

  router.route('/teachers/Economics')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersInEconomics)

  router.route('/teachers/Primary')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersForPrimary)

  router.route('/teacher/JuniorSecondary')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']),approvedTeachersForJuniorSecondary)

router
  .route('/teachers/:_id')
  .get(authenticate, permit(['user', 'school', 'admin', 'parent']), fetchOne)
  .delete(authenticate, permit(['admin', 'user']), deleteOne)
  .put(authenticate, permit(['admin', 'user']), update)

 router.route('/teachers/:_id/approved').put(authenticate, permit(['admin']), adminApprovedTeachers)
 export default router;
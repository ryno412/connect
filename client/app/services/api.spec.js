import apiModule from './api';

describe('api', () => {
  let api, $httpBackend;
    const appsMocks = [
      {
        id:1,
        icon: 'default',
        name: 'My Cool App',
        type: 'Watch',
        version: '1.0',
        submissionState: 'Prepare for Submission'
      },
      {
        id: 2,
        icon: 'default',
        name: 'My Not So Cool App',
        type: 'IOS',
        version: '1.0',
        submissionState: 'Review'
      }
    ]


   beforeEach(window.module(apiModule.name));
    beforeEach(inject(($injector) => {
        api = $injector.get('api');
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend.when('GET', '/api/app-details/1')
          .respond(200, appsMocks[0]);

        $httpBackend.when('GET', '/api/api-my-app')
          .respond(200, appsMocks);
        }));



    it('loads the app details with provided id', (done) => {
      api.fetchAppDetail(1).then(res => {
          expect(res.data).to.eql(appsMocks[0]);
          done();
        })
        $httpBackend.flush();
    });

    it('loads the apps response', (done) => {
      api.fetchMyApps().then(res => {
        expect(res.data).to.eql(appsMocks);
        done();
    })
      $httpBackend.flush();
    });
});



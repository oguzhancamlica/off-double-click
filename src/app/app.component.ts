import { Component } from '@angular/core';
import { FakeApiService } from 'src/fake-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  constructor(private service: FakeApiService) { }

  async post() {
    await this.service.post().toPromise();
  }

  async get() {
    await this.service.get().toPromise();
  }

  async getDelay() {
    await this.service.getRealDataDelay(Math.random() * 10).toPromise();
  }
}

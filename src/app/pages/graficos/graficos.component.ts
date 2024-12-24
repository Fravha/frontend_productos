import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';

Chart.register(...registerables);

@Component({
  selector: 'app-graficos',
  template: `
    <div class="chart-container">
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styles: [`
    .chart-container {
      width: 100%;
      max-width: 800px;
      height: 400px;
      margin: 150px auto;
    }
  `],
  standalone:false
})
export class GraficosComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  chart: Chart | null = null;

  ngOnInit(): void {
    // Inicialización general si es necesaria
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    if (!this.chartCanvas) {
      console.error('El elemento chartCanvas no está disponible.');
      return;
    }

    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [
        {
          label: 'Ventas 2024',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
        {
          label: 'Ventas 2023',
          data: [10, 15, 6, 8, 4, 5],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Comparativa de Ventas',
          },
          legend: {
            position: 'top',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  updateChartData(newData: { labels: string[], datasets: any[] }): void {
    if (this.chart) {
      this.chart.data = newData;
      this.chart.update();
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }
}